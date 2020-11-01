export const writer = postId => state => {
  const { writer } = state.MAIN.posts.find(({ id }) => id === postId);
  return writer;
};
