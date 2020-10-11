import { useExtendedQuery as useQuery } from '../../../../hooks';
import { LIKER_LIST } from '../../../../queries';

const DEFAULT_LIMIT = 10;

const makeVariables = (myId, postId, limit = DEFAULT_LIMIT) => cursor => ({
  myId,
  postId,
  cursor,
  limit,
});

export const useFetchLikers = (myId, postId) => {
  const partialVariables = makeVariables(myId, postId);
  const initVariables = partialVariables(null);

  const { data, loading, fetchMore } = useQuery(LIKER_LIST, {
    variables: initVariables,
    fetchPolicy: 'network-only',
  });
  const likers = (data && data.likerList) || [];

  const fetchMoreLikers = done => {
    const cursor = likers[likers.length - 1].likedAt;
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
    initIsLoading: loading,
    fetchMoreLikers,
  };
};
