import {
  LOAD_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_RECOVER,
  TOGGLE_HEART,
  ADD_COMMENT,
  DELETE_POST,
} from './actions';

const createLoadState = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

const createNewPosts = callback => (state, action) => {
  const { posts } = state;
  const { postId } = action;
  const idx = posts.findIndex(({ id }) => id === postId);
  if (idx === -1) return state;
  const newPost = callback(posts[idx], action);
  const newPosts = newPost
    ? [...posts.slice(0, idx), newPost, ...posts.slice(idx + 1)]
    : [...posts.slice(0, idx), ...posts.slice(idx + 1)];
  return {
    ...state,
    posts: newPosts,
  };
};

const toggleHeart = createNewPosts(post => {
  const currentIsLike = post.isLike;
  const delta = currentIsLike ? -1 : 1;
  const newPost = {
    ...post,
    isLike: !currentIsLike,
    likerInfo: {
      ...post.likerInfo,
      likerCount: post.likerInfo.likerCount + delta,
    },
  };
  return newPost;
});

const addNewComment = createNewPosts((post, { comment }) => ({
  ...post,
  commentList: [...post.commentList, comment],
}));

const deletePost = createNewPosts(() => null);

const reducer = (state = {}, action) => {
  const { type, error, posts } = action;
  switch (type) {
    case LOAD_POSTS:
      return createLoadState(state, {
        loading: true,
        error: null,
      });
    case LOAD_POSTS_SUCCESS:
      return createLoadState(state, {
        posts: [...state.posts, ...posts],
        loading: false,
        error: null,
        hasMore: posts.length > 0,
      });
    case LOAD_POSTS_ERROR:
      return createLoadState(state, {
        loading: false,
        error,
      });
    case LOAD_POSTS_RECOVER:
      return createLoadState(state, {
        error: null,
      });
    case DELETE_POST:
      return deletePost(state, action);
    case TOGGLE_HEART:
      return toggleHeart(state, action);
    case ADD_COMMENT:
      return addNewComment(state, action);
    default:
      return state;
  }
};

export default reducer;
