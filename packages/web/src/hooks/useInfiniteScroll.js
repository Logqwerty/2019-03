import { useState, useEffect, useRef } from 'react';
import { throttle } from 'underscore';

import useUnmounted from './useUnmounted';

const isArriveAtBottom = ({ scrollHeight, offsetHeight, scrollTop }) =>
  offsetHeight + scrollTop >= scrollHeight;
const isNotArriveAtBottom = scroller => !isArriveAtBottom(scroller);

const useInfiniteScroll = loadData => {
  const scrollerRef = useRef(null);
  const { current: scroller } = scrollerRef;
  const [loadInfo, setLoadInfo] = useState({ isLoading: false, hasMore: true });
  const isUnmounted = useUnmounted();

  useEffect(() => {
    const onScrollHandler = throttle(({ target }) => {
      const { isLoading, hasMore } = loadInfo;
      if (isLoading || !hasMore || isNotArriveAtBottom(target)) return;

      setLoadInfo(prev => ({ ...prev, isLoading: true }));
      loadData(hasMore => {
        if (isUnmounted.current) return;
        setLoadInfo({ isLoading: false, hasMore });
      });
    }, 100);

    if (scroller) scroller.addEventListener('scroll', onScrollHandler);
    return () => {
      if (scroller) scroller.removeEventListener('scroll', onScrollHandler);
    };
  }, [scroller, isUnmounted, loadData, loadInfo]);

  return { isLoading: loadInfo.isLoading, scrollerRef };
};

export default useInfiniteScroll;
