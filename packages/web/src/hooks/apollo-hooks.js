import { useQuery } from '@apollo/react-hooks';

const nothing = () => {};

const checkExistsMoreData = data =>
  Array.isArray(data) ? data.length > 0 : !!data;

export const useExtendedQuery = (query, options) => {
  const { fetchMore, ...others } = useQuery(query, options);

  /**
   * 'ObservableQuery with this id doesn't exist: id' on unmounted component
   * https://github.com/apollographql/apollo-client/issues/4114#issuecomment-502111099
   */
  const ignoredViolationFetchMore = ({ checkMore, ...fetchMoreOptions }) => {
    return fetchMore(fetchMoreOptions)
      .then(({ data }) => checkExistsMoreData(data[checkMore]))
      .catch(nothing);
  };

  return {
    ...others,
    fetchMore: ignoredViolationFetchMore,
  };
};
