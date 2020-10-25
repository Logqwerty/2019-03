import { last } from 'underscore';

export const posts = state => state.MAIN.posts;
export const error = state => state.MAIN.error;
export const postsCursor = state => {
  const lastPost = last(state.MAIN.posts);
  return lastPost ? lastPost.updatedAt : null;
};
