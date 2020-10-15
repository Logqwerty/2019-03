import { useQuery } from '@apollo/react-hooks';
import { useErrorHandler } from 'react-error-boundary';

const checkExistsMoreData = data =>
  Array.isArray(data) ? data.length > 0 : !!data;

const useApolloQuery = (query, options) => {
  const handleError = useErrorHandler();
  const { fetchMore, ...others } = useQuery(query, options);

  const extendedFetchMore = ({ checkMore, ...fetchMoreOptions }) => {
    return fetchMore(fetchMoreOptions)
      .then(({ data }) => checkExistsMoreData(data[checkMore]))
      .catch(({ name, networkError }) => {
        /**
         * 'ObservableQuery with this id doesn't exist: id' on unmounted component
         * https://github.com/apollographql/apollo-client/issues/4114#issuecomment-502111099
         */
        if (name === 'Invariant Violation') return;
        if (networkError) handleError(new Error(networkError));
      });
  };

  return {
    ...others,
    fetchMore: extendedFetchMore,
  };
};

export default useApolloQuery;
