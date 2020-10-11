const {
  User,
  PostLike,
  Log,
  Sequelize: { Op },
} = require('../../db');
const { errorName } = require('../../error');

async function checkUserLikePost(userId, postId) {
  try {
    const result = await PostLike.findOne({
      attributes: ['id'],
      where: {
        UserId: userId,
        PostId: postId,
      },
    });
    return result !== null;
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

async function getLikerInfo(postId) {
  try {
    const { rows, count } = await PostLike.findAndCountAll({
      attributes: ['id', 'updatedAt', 'UserId'],
      where: { PostId: postId },
      order: [['updatedAt', 'DESC']],
    });

    let likerInfo = {
      username: '',
      profileImage: '',
      likerCount: count,
    };

    if (rows.length === 0) return likerInfo;
    const { username, profileImage } = await User.findOne({
      attributes: ['username', 'profileImage'],
      where: { id: rows[0].UserId },
    });
    likerInfo = { ...likerInfo, username, profileImage };

    return likerInfo;
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

const isOnlyDigits = str => /^\d+$/g.test(str);

async function getLikerList(PostId, cursor, limit = 10) {
  try {
    const result = await PostLike.findAll({
      attributes: ['id', 'updatedAt'],
      where: {
        PostId,
        updatedAt: {
          [Op.lt]: new Date(isOnlyDigits(cursor) ? +cursor : cursor),
        },
      },
      include: {
        model: User,
        attributes: ['id', 'username', 'name', 'profileImage'],
      },
      order: [['updatedAt', 'DESC']],
      limit,
    });

    const likerList = result.map(
      ({ updatedAt, User: { id, username, name, profileImage } }) => ({
        id,
        username,
        name,
        profileImage,
        likedAt: updatedAt,
      }),
    );

    return {
      postId: PostId,
      likerList,
    };
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

async function setPostLike(userId, writerId, postId) {
  try {
    await PostLike.create({
      UserId: userId,
      PostId: postId,
      updatedAt: new Date(),
    });

    if (userId !== writerId) {
      await Log.create({
        From: userId,
        To: writerId,
        PostId: postId,
        status: 'like',
        updatedAt: new Date(),
      });
    }
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

async function unsetPostLike(userId, postId) {
  try {
    await PostLike.destroy({
      where: { PostId: postId, UserId: userId },
    });
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

module.exports = {
  checkUserLikePost,
  getLikerInfo,
  setPostLike,
  unsetPostLike,
  getLikerList,
};
