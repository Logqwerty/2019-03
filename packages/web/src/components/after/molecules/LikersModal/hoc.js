import React, { useRef } from 'react';

import { useInfiniteScroll } from '../../../../hooks';
import { useFetchLikers } from './hooks';

export const withLikersData = Comp => ({
  myId,
  postId,
  isOpen,
  onCloseModal,
}) => {
  if (!isOpen) return null;

  const likersContainer = useRef(null);
  const { fetchMoreLikers, initIsLoading, likers } = useFetchLikers(
    myId,
    postId,
  );
  const { isLoading } = useInfiniteScroll(
    likersContainer.current,
    fetchMoreLikers,
  );

  return (
    <Comp
      likers={likers}
      myId={myId}
      isOpen={isOpen}
      onCloseModal={onCloseModal}
      isLoading={isLoading || initIsLoading}
      ref={likersContainer}
    />
  );
};
