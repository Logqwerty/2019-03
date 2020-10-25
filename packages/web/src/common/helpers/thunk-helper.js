import apolloClient from '../apollo-client';

export const withApolloClient = thunk => {
  return thunk(apolloClient);
};
