import { gql } from 'apollo-boost';

const LIKER_LIST = gql`
  query LikerList($myId: ID!, $postId: ID!, $cursor: String, $limit: Int) {
    likerList(myId: $myId, postId: $postId, cursor: $cursor, limit: $limit) {
      id
      username
      name
      profileImage
      isFollow
      likedAt
    }
  }
`;

export default LIKER_LIST;
