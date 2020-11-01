import { withApolloClient } from '@helpers';
import { LIKER_LIST } from '@queries';
import {
  loadLikers,
  loadLikersSuccess,
  loadLikersError,
  updateFollowing,
} from './actions';

const DEFAULT_LIKERS_LIMIT = 10;

const makeLikersVariables = (
  myId,
  postId,
  limit = DEFAULT_LIKERS_LIMIT,
) => cursor => ({
  myId,
  postId,
  cursor,
  limit,
});

const makePostLikersQuery = (myId, postId, cursor) => {
  const partialVariables = makeLikersVariables(myId, postId);
  const variables = partialVariables(cursor);
  return {
    query: LIKER_LIST,
    variables,
    fetchPolicy: 'network-only',
  };
};

export const fetchPostLikers = withApolloClient(
  apolloClient => (myId, postId, cursor = null) => dispatch => {
    dispatch(loadLikers());

    const postLikersQuery = makePostLikersQuery(myId, postId, cursor);
    return apolloClient.query(postLikersQuery).then(
      ({ data }) => dispatch(loadLikersSuccess(data.likerList, postId)),
      error => dispatch(loadLikersError(error)),
    );
  },
);

export const updateLikerFollowing = ({
  postId,
  userId,
  isFollow,
}) => dispatch => {
  dispatch(updateFollowing({ postId, userId, isFollow }));
};
