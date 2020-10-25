import { FOLLOW_STATUS } from '../src/constants';
import { rawLikers, profileImage, posts } from '../src/__test__/fixtures';

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

const likerList = async (_, args) => {
  console.info(`[likerList] arg: ${JSON.stringify(args, null, 2)}`);
  await delay();
  const { cursor, limit } = args;
  return rawLikers
    .filter(({ likedAt }) => (cursor || Date.now()) > +likedAt)
    .slice(0, limit);
};

const createComment = async (_, args) => {
  console.info(`[createComment] arg: ${JSON.stringify(args, null, 2)}`);
  await delay();
  const { content, PostId } = args;
  return {
    id: Date.now().toString(),
    content,
    updatedAt: Date.now().toString(),
    writer: {
      username: 'tester1',
      profileImage,
    },
    PostId,
  };
};

const followingPostList = async (_, args) => {
  console.info(`[followingPostList] arg: ${JSON.stringify(args, null, 2)}`);
  const { cursor, limit } = args;
  await delay();
  return posts
    .filter(({ updatedAt }) => (cursor || Date.now()) > +updatedAt)
    .slice(0, limit);
};

export default {
  String: () => 'Hello, World!',
  Query: () => ({
    likerList,
    followingPostList,
  }),
  Mutation: () => ({
    createPostLike,
    deletePostLike,
    deletePost,
    RequestFollowing,
    RequestFollowingCancellation,
    createComment,
  }),
};
