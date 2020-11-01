import { last } from 'underscore';

export const likers = postId => state => state.likers[postId] || [];
export const error = state => state.likers.error;
export const cursor = postId => state => {
  const lastLiker = last(state.likers[postId]);
  return lastLiker ? lastLiker.likedAt : null;
};
