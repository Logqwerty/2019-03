import { useRef, useEffect } from 'react';

// https://stackoverflow.com/questions/58038008/how-to-stop-memory-leak-in-useeffect-hook-react/58038029
const useUnmounted = () => {
  const isUnmounted = useRef(false);
  useEffect(() => {
    return () => {
      isUnmounted.current = true;
    };
  }, []);
  return isUnmounted;
};

export default useUnmounted;
