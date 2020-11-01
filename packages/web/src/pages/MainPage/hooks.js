import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInfiniteScrollWithRedux as useInfiniteScroll } from '@hooks';
import {
  fetchFollowingPosts,
  togglePostHeart,
  addNewComment,
  deletePostByURL,
} from './thunks';
import * as selector from './selectors';

export const useFetchPosts = myInfo => {
  const dispatch = useDispatch();
  const posts = useSelector(selector.posts);
  const error = useSelector(selector.error);
  const cursor = useSelector(selector.postsCursor);

  const { loading } = useInfiniteScroll(
    'MAIN',
    fetchFollowingPosts(myInfo, cursor),
  );

  useEffect(() => {
    dispatch(fetchFollowingPosts(myInfo));
  }, [dispatch, myInfo]);

  return {
    posts,
    error,
    loading,
  };
};

export const usePostHandlers = () => {
  const dispatch = useDispatch();
  const toggleHeart = useCallback(
    ({ postId, myId, writerId, isLike }) =>
      dispatch(togglePostHeart({ postId, myId, writerId, isLike })),
    [dispatch],
  );
  const addComment = useCallback(
    (postId, newComment) => dispatch(addNewComment(postId, newComment)),
    [dispatch],
  );
  const deletePost = useCallback(
    (postId, postURL) => dispatch(deletePostByURL(postId, postURL)),
    [dispatch],
  );

  return {
    toggleHeart,
    addComment,
    deletePost,
  };
};
