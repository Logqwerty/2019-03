export const liker = (postId, userId) => state => {
  const likers = state.likers[postId];
  return likers.find(({ id }) => id === userId);
};
