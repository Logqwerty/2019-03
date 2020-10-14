import { useApolloQuery } from '../../../../hooks';
import { LIKER_LIST } from '../../../../queries';

const DEFAULT_LIMIT = 10;

const makePartialVariables = (
  myId,
  postId,
  limit = DEFAULT_LIMIT,
) => cursor => ({
  myId,
  postId,
  cursor,
  limit,
});

export const useFetchLikers = (myId, postId) => {
  const partialVariables = makePartialVariables(myId, postId);
  const initVariables = partialVariables(null);
  const { data, loading, error, fetchMore } = useApolloQuery(LIKER_LIST, {
    variables: initVariables,
    fetchPolicy: 'network-only',
  });
  const likers = (data && data.likerList) || [];

  const fetchMoreLikers = done => {
    const lastLiker = likers[likers.length - 1];
    const cursor = lastLiker ? lastLiker.likedAt : null;
    const newVariables = partialVariables(cursor);

    fetchMore({
      query: LIKER_LIST,
      variables: newVariables,
      updateQuery: (prev, { fetchMoreResult }) => ({
        ...prev,
        likerList: [...prev.likerList, ...fetchMoreResult.likerList],
      }),
      checkMore: 'likerList',
    }).then(done);
  };

  return {
    likers,
    error,
    initLoading: loading,
    fetchMoreLikers,
  };
};
