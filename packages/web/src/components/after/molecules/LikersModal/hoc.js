import React from 'react';
import { useErrorHandler } from 'react-error-boundary';

import { ScrollableContainer } from '@molecules';
import { useFetchLikers } from './hooks';
import { useInfiniteScroll } from '../../../../hooks';

export const withLikersData = Component => {
  const WrappedComponent = ({ myId, postId }) => {
    const handleError = useErrorHandler();
    const { initLoading, error, likers, fetchMoreLikers } = useFetchLikers(
      myId,
      postId,
    );
    const { isLoading, scrollerRef } = useInfiniteScroll(fetchMoreLikers);
    if (error) return handleError(error);

    return (
      <ScrollableContainer
        isLoading={isLoading || initLoading}
        ref={scrollerRef}
      >
        <Component likers={likers} myId={myId} />
      </ScrollableContainer>
    );
  };

  const name = Component.displayName || Component.name || 'Likers';
  WrappedComponent.displayName = `withLikersData(${name})`;

  return WrappedComponent;
};
