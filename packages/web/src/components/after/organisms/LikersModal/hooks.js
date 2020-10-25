import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInfiniteScrollWithRedux as useInfiniteScroll } from '@hooks';
import { fetchPostLikers } from './thunks';
import * as selector from './selectors';

export const useFetchLikers = (myId, postId) => {
  const dispatch = useDispatch();
  const likers = useSelector(selector.likers(postId));
  const error = useSelector(selector.error);
  const cursor = useSelector(selector.cursor(postId));

  const { loading, scrollerRef } = useInfiniteScroll(
    'likers',
    fetchPostLikers(myId, postId, cursor),
  );

  useEffect(() => {
    dispatch(fetchPostLikers(myId, postId));
  }, [dispatch, myId, postId]);

  return {
    likers,
    error,
    loading,
    scrollerRef,
  };
};
