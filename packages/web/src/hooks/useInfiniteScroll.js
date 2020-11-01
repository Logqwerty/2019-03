import { useEffect, useRef } from 'react';
import { throttle } from 'underscore';
import { useDispatch, useSelector } from 'react-redux';

const getProp = (obj, path) => {
  const keys = path.split('.');
  return keys.reduce((prop, key) => (prop ? prop[key] : null), obj);
};

const isNotArriveAtBottom = target => {
  if (target !== window) {
    const { scrollHeight, offsetHeight, scrollTop } = target;
    return offsetHeight + scrollTop < scrollHeight;
  }

  return (
    window.innerHeight + document.documentElement.scrollTop <
    document.documentElement.scrollHeight
  );
};

export const useInfiniteScrollWithRedux = (path, thunk, isWindow = true) => {
  const scrollerRef = useRef(isWindow ? window : null);
  const { current: scroller } = scrollerRef;

  const dispatch = useDispatch();
  const loading = useSelector(state => getProp(state, path).loading);
  const shouldLoadData = useSelector(state => {
    const { hasMore, loading } = getProp(state, path);
    return !loading && hasMore;
  });

  useEffect(() => {
    const onScrollHandler = throttle(() => {
      if (!shouldLoadData || isNotArriveAtBottom(scroller)) return;
      dispatch(thunk);
    }, 100);

    if (scroller) {
      scroller.addEventListener('scroll', onScrollHandler);
    }
    return () => {
      if (scroller) {
        scroller.removeEventListener('scroll', onScrollHandler);
      }
    };
  }, [dispatch, scroller, shouldLoadData, thunk]);

  return { loading, scrollerRef };
};
