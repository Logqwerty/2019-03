import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

const cache = new InMemoryCache();
cache.writeData({
  data: {
    isLoggedIn: false,
  },
});

const isDevelopment = process.env.NODE_ENV === 'development';

const corsOptions = {
  credentials: isDevelopment ? 'same-origin' : 'include',
  fetchOptions: {
    credentials: isDevelopment ? 'same-origin' : 'include',
  },
};

const client = new ApolloClient({
  link: createUploadLink({
    uri: `${process.env.REACT_APP_API_URL}/graphql`,
    ...corsOptions,
  }),
  cache,
});

export default client;
