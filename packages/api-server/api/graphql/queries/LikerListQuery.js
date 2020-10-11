const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { LikerType } = require('../types');
const { getLikerList } = require('../../services/post-like-service');
const { setIsFollowPropOfUsers } = require('../../services/following-service');

const likerListQuery = {
  type: new GraphQLList(LikerType),
  args: {
    myId: {
      type: GraphQLID,
    },
    postId: {
      type: GraphQLID,
    },
    cursor: {
      type: GraphQLString,
    },
    limit: {
      type: GraphQLInt,
      defaultValue: 10,
    },
  },
  resolve: async (_, { myId, postId, cursor, limit }) => {
    if (!cursor) cursor = new Date().getTime().toString();
    const { likerList } = await getLikerList(postId, cursor, limit);
    const updatedLikerList = setIsFollowPropOfUsers({
      from: myId,
      users: likerList,
    });
    return updatedLikerList;
  },
};

module.exports = { likerListQuery };
