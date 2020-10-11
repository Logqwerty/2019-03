import { useState, useEffect, useCallback } from 'react';

const isArriveAtBottom = ({ scrollHeight, offsetHeight, scrollTop }) =>
  offsetHeight + scrollTop >= scrollHeight;

const useInfiniteScroll = (targetEl, callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMore, setIsMore] = useState(true);

  const scrollHandler = useCallback(
    ({ target }) => {
      if (isMore && !isLoading && isArriveAtBottom(target)) {
        setIsLoading(true);
        callback(isMore => {
          setIsMore(isMore || true);
          setIsLoading(false);
        });
      }
    },
    [callback, isLoading, isMore],
  );

  useEffect(() => {
    if (!targetEl) return () => {};
    targetEl.addEventListener('scroll', scrollHandler);
    return () => targetEl.removeEventListener('scroll', scrollHandler);
  }, [targetEl, scrollHandler]);

  return { isLoading, isMore };
};

export default useInfiniteScroll;
