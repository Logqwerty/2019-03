const {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');

const LikerType = new GraphQLObjectType({
  name: 'Liker',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    profileImage: {
      type: GraphQLString,
    },
    isFollow: {
      type: GraphQLInt,
    },
    likedAt: {
      type: GraphQLString,
    },
  }),
});

module.exports = { LikerType };
