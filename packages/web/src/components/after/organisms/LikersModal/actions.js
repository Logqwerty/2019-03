import { LOAD_TYPE, createLoadDataAction } from '@helpers';

export const {
  [LOAD_TYPE.load]: LOAD_LIKERS,
  [LOAD_TYPE.success]: LOAD_LIKERS_SUCCESS,
  [LOAD_TYPE.error]: LOAD_LIKERS_ERROR,
  [LOAD_TYPE.recover]: LOAD_LIKERS_RECOVER,
} = createLoadDataAction('likers');
export const loadLikers = () => ({ type: LOAD_LIKERS });
export const loadLikersSuccess = (likers, postId) => ({
  type: LOAD_LIKERS_SUCCESS,
  likers,
  postId,
});
export const loadLikersError = error => ({ type: LOAD_LIKERS_ERROR, error });
export const recoverLikersError = () => ({ type: LOAD_LIKERS_RECOVER });

export const RESET_LIKERS = 'likers/RESET_LIKERS';
export const resetLikers = postId => ({ type: RESET_LIKERS, postId });

export const UPDATE_FOLLOWING = 'likers/UPDATE_FOLLOWING';
export const updateFollowing = ({ postId, userId, isFollow }) => ({
  type: UPDATE_FOLLOWING,
  postId,
  userId,
  isFollow,
});
