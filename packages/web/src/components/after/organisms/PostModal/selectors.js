export const post = postId => state =>
  state.MAIN.posts.find(({ id }) => id === postId);
