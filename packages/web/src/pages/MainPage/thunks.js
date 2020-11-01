import { withApolloClient } from '@helpers';
import {
  FOLLOWING_POST_LIST,
  CREATE_POST_LIKE,
  DELETE_POST_LIKE,
  DELETE_POST,
} from '@queries';
import {
  loadPostsError,
  loadPostsSuccess,
  loadPosts,
  toggleHeart,
  addComment,
  deletePost,
} from './actions';

const DEFAULT_POSTS_LIMIT = 5;

const makePostsVariables = (myId, limit = DEFAULT_POSTS_LIMIT) => cursor => ({
  myId,
  limit,
  cursor,
});

const makeFollowingPostsQuery = (myInfo, cursor) => {
  const partialVariables = makePostsVariables(myInfo.id);
  const variables = partialVariables(cursor);
  return {
    query: FOLLOWING_POST_LIST,
    variables,
    fetchPolicy: 'network-only',
  };
};

export const fetchFollowingPosts = withApolloClient(
  apolloClient => (myInfo, cursor = null) => dispatch => {
    dispatch(loadPosts());

    const followingPostsQuery = makeFollowingPostsQuery(myInfo, cursor);
    return apolloClient.query(followingPostsQuery).then(
      ({ data }) => dispatch(loadPostsSuccess(data.followingPostList)),
      error => dispatch(loadPostsError(error)),
    );
  },
);

export const togglePostHeart = withApolloClient(
  apolloClient => ({ postId, myId, writerId, isLike }) => dispatch => {
    dispatch(toggleHeart(postId));

    const mutation = isLike ? DELETE_POST_LIKE : CREATE_POST_LIKE;
    const variables = {
      PostId: postId,
      UserId: myId,
    };
    if (!isLike) variables.WriterId = writerId;
    return apolloClient.mutate({
      mutation,
      variables,
    });
  },
);

export const addNewComment = (postId, newComment) => dispatch => {
  dispatch(addComment(postId, newComment));
};

export const deletePostByURL = withApolloClient(
  apolloClient => (postId, postURL) => dispatch => {
    dispatch(deletePost(postId, postURL));

    return apolloClient.mutate({
      mutation: DELETE_POST,
      variables: { postURL },
    });
  },
);
