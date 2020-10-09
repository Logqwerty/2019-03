import { ApolloServer } from 'apollo-server';

import typeDefs from './type-defs';
import mockResolvers from './mock-resolvers';

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: mockResolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`Graphql mock server ready! ${url}`))
  .catch(err => console.error(err));
