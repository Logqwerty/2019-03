const FOLLOW_STATUS = Object.freeze({
  following: 0,
  none: 2,
});

const delay = (sec = 1) => {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(`delay ${sec} seconds...`);
      resolve();
    }, sec * 1000),
  );
};

const createPostLike = (_, args) => {
  console.info(`[createPostLike] args: ${JSON.stringify(args, null, 2)}`);
  return 1;
};

const deletePostLike = (_, args) => {
  console.info(`[deletePostLike] args: ${JSON.stringify(args, null, 2)}`);
  return 1;
};

const deletePost = (_, args) => {
  console.info(`[deletePost] args: ${JSON.stringify(args, null, 2)}`);
  return { postURL: args.postURL };
};

const RequestFollowing = async (_, args) => {
  console.info(`[RequestFollowing] args: ${JSON.stringify(args, null, 2)}`);
  await delay();
  return {
    from: 1,
    to: 2,
    status: FOLLOW_STATUS.following,
    updatedAt: Date.now().toString(),
  };
};

const RequestFollowingCancellation = async (_, args) => {
  console.info(
    `[RequestFollowingCancellation] args: ${JSON.stringify(args, null, 2)}`,
  );
  await delay();
  return {
    from: 1,
    to: 2,
  };
};

module.exports = {
  String: () => 'Hello, World!',
  Mutation: () => ({
    createPostLike,
    deletePostLike,
    deletePost,
    RequestFollowing,
    RequestFollowingCancellation,
  }),
};
