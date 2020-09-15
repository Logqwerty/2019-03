const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./type-defs');
const mocks = require('./mock-resolvers');

const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
});

server
  .listen()
  .then(({ url }) => console.log(`Graphql mock server ready! ${url}`))
  .catch(err => console.error(err));
