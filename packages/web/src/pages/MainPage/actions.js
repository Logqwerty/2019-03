import { LOAD_TYPE, createLoadDataAction } from '@helpers';

export const {
  [LOAD_TYPE.load]: LOAD_POSTS,
  [LOAD_TYPE.success]: LOAD_POSTS_SUCCESS,
  [LOAD_TYPE.error]: LOAD_POSTS_ERROR,
  [LOAD_TYPE.recover]: LOAD_POSTS_RECOVER,
} = createLoadDataAction('posts');
export const loadPosts = () => ({ type: LOAD_POSTS });
export const loadPostsSuccess = posts => ({ type: LOAD_POSTS_SUCCESS, posts });
export const loadPostsError = error => ({ type: LOAD_POSTS_ERROR, error });
export const recoverPostsError = () => ({ type: LOAD_POSTS_RECOVER });

export const DELETE_POST = 'posts/DELETE_POST';
export const deletePost = (postId, postURL) => ({
  type: DELETE_POST,
  postId,
  postURL,
});

export const TOGGLE_HEART = 'posts/TOGGLE_HEART';
export const toggleHeart = (postId, nextIsLike) => ({
  type: TOGGLE_HEART,
  postId,
  nextIsLike,
});

export const ADD_COMMENT = 'posts/ADD_COMMENT';
export const addComment = (postId, newComment) => ({
  type: ADD_COMMENT,
  comment: newComment,
  postId,
});
