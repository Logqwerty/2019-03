const {
  UserFollow,
  Log,
  Sequelize: { Op },
} = require('../../db');
const { errorName } = require('../../error');

const insertFollow = async (myId, userId) => {
  const userFollower = await UserFollow.create({
    from: myId,
    to: userId,
    status: 0,
  });
  return userFollower;
};

const insertFollowLog = async (myId, userId) => {
  await Log.create({
    From: myId,
    To: userId,
    status: 'follow',
  });
};

const createFollowData = async ({ myId, userId }) => {
  try {
    const userFollower = await insertFollow(myId, userId);
    await insertFollowLog(myId, userId);
    return userFollower;
  } catch (err) {
    throw new Error(errorName.FOLLOW_INSERT_ERROR);
  }
};

const deleteFollow = async (myId, userId) => {
  const userFollowerCancellation = await UserFollow.destroy({
    where: {
      from: myId,
      to: userId,
    },
  });
  return userFollowerCancellation;
};

const deleteFollowLog = (myId, userId) => {
  Log.destroy({
    where: {
      From: myId,
      To: userId,
      status: 'follow',
    },
  });
};

const destroyFollowCancellationData = async ({ myId, userId }) => {
  try {
    const userFollowerCancellation = await deleteFollow(myId, userId);
    await deleteFollowLog(myId, userId);
    return userFollowerCancellation;
  } catch (err) {
    throw new Error(errorName.FOLLOW_DELETE_ERROR);
  }
};

const setIsFollowPropOfUsers = async ({ from, users }) => {
  const userIds = users.map(({ id }) => id);
  const result = await UserFollow.findAll({
    attributes: ['to'],
    where: {
      from,
      to: { [Op.in]: userIds },
    },
    order: [['updatedAt', 'DESC']],
  });
  const updatedUsers = users.map(user => {
    const isFollow = result.find(({ to }) => user.id === to);
    return { ...user, isFollow: !!isFollow };
  });
  return updatedUsers;
};

module.exports = {
  destroyFollowCancellationData,
  createFollowData,
  setIsFollowPropOfUsers,
};
