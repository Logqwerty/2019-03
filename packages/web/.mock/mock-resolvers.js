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

module.exports = {
  String: () => 'Hello, World!',
  Mutation: () => ({
    createPostLike,
    deletePostLike,
    deletePost,
  }),
};
