const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    name: String
    cellPhone: String
    profileImage: String
    isFollow: Int
    updatedAt: String
  }

  type Comment {
    id: ID
    content: String
    depth: Int
    updatedAt: String
    isLike: Boolean
    PostId: String
    writer: User
  }

  type LikerInfo {
    likerCount: Int
    username: String
    profileImage: String
  }

  type Post {
    id: ID
    postURL: String
    imageURL: String
    content: String
    updatedAt: String
    UserId: String
    writer: User
    isLike: Boolean
    commentCount: Int
    commentList: [Comment]
    likerInfo: LikerInfo
  }

  type Query {
    dummy: String
  }

  type Mutation {
    createPostLike(PostId: ID!, WriterId: ID!, UserId: ID!): ID
    deletePostLike(PostId: ID!, UserId: ID!): ID
    deletePost(postURL: String!): Post
  }
`;

module.exports = typeDefs;
