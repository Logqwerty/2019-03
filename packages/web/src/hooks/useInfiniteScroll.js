import { useState, useEffect, useCallback, useRef } from 'react';
import { throttle } from 'underscore';

import useUnmounted from './useUnmounted';

const isArriveAtBottom = ({ scrollHeight, offsetHeight, scrollTop }) =>
  offsetHeight + scrollTop >= scrollHeight;
const isNotArriveAtBottom = scroller => !isArriveAtBottom(scroller);

const useInfiniteScroll = loadData => {
  const scrollerRef = useRef(null);
  const { current: scroller } = scrollerRef;
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const isNoMoreData = useCallback(() => hasMore === false, [hasMore]);
  const isUnmounted = useUnmounted();

  useEffect(() => {
    const onScrollHandler = throttle(({ target }) => {
      if (isLoading || isNoMoreData() || isNotArriveAtBottom(target)) return;
      setIsLoading(true);
      loadData(hasMore => {
        if (isUnmounted.current) return;
        setIsLoading(false);
        setHasMore(hasMore);
      });
    }, 100);

    if (scroller) scroller.addEventListener('scroll', onScrollHandler);
    return () => {
      if (scroller) scroller.removeEventListener('scroll', onScrollHandler);
    };
  }, [scroller, isUnmounted, loadData, isLoading, isNoMoreData]);

  return { isLoading, scrollerRef };
};

export default useInfiniteScroll;
