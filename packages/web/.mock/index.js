const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    dummy: String
  }

  type Mutation {
    createPostLike(PostId: ID!, WriterId: ID!, UserId: ID!): ID
    deletePostLike(PostId: ID!, UserId: ID!): ID
  }
`;

const resolvers = {};

const mocks = {
  String: () => 'Hello, World!',
  Mutation: () => ({
    createPostLike: (_, args) => {
      console.log(`[createPostLike] args: ${JSON.stringify(args, null, 2)}`);
      return 1;
    },
    deletePostLike: (_, args) => {
      console.log(`[deletePostLike] args: ${JSON.stringify(args, null, 2)}`);
      return 1;
    },
  }),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
});

server
  .listen()
  .then(({ url }) => console.log(`Graphql mock server ready! ${url}`))
  .catch(err => console.error(err));
