import { FOLLOW_STATUS } from '@const';
import {
  LOAD_LIKERS,
  LOAD_LIKERS_ERROR,
  LOAD_LIKERS_SUCCESS,
  LOAD_LIKERS_RECOVER,
  UPDATE_FOLLOWING,
  RESET_LIKERS,
} from './actions';

const initialState = {
  likers: {},
  loading: false,
  error: null,
};

const createLikersState = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

const updateLikerFollowing = (state, action) => {
  const { postId, userId, isFollow } = action;
  const likers = state[postId];
  const idx = likers.findIndex(({ id }) => id === userId);
  if (idx === -1) return state;
  const newIsFollow =
    isFollow === FOLLOW_STATUS.none
      ? FOLLOW_STATUS.following
      : FOLLOW_STATUS.none;
  const newLiker = {
    ...likers[idx],
    isFollow: newIsFollow,
  };

  return {
    ...state,
    [postId]: [...likers.slice(0, idx), newLiker, ...likers.slice(idx + 1)],
  };
};

const reducer = (state = initialState, action) => {
  const { type, error, postId, likers } = action;
  switch (type) {
    case LOAD_LIKERS:
      return createLikersState(state, {
        loading: true,
        error: null,
      });
    case LOAD_LIKERS_SUCCESS: {
      const prevLikers = state[postId] || [];
      return createLikersState(state, {
        [postId]: [...prevLikers, ...likers],
        loading: false,
        error: null,
        hasMore: likers.length > 0,
      });
    }
    case LOAD_LIKERS_ERROR:
      return createLikersState(state, {
        loading: false,
        error,
      });
    case LOAD_LIKERS_RECOVER:
      return createLikersState(state, {
        error: null,
      });
    case UPDATE_FOLLOWING:
      return updateLikerFollowing(state, action);
    case RESET_LIKERS:
      return createLikersState(state, {
        [postId]: [],
      });
    default:
      return state;
  }
};

export default reducer;
