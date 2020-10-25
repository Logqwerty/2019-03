import React, { useCallback } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useDispatch } from 'react-redux';

import { ScrollableContainer, Liker } from '@molecules';
import { useFetchLikers } from './hooks';
import { updateLikerFollowing } from './thunks';

const Likers = ({ myId, postId }) => {
  const dispatch = useDispatch();
  const handleError = useErrorHandler();
  const { likers, error, loading, scrollerRef } = useFetchLikers(myId, postId);
  const updateFollowing = useCallback(
    ({ postId, userId, isFollow }) =>
      dispatch(updateLikerFollowing({ postId, userId, isFollow })),
    [dispatch],
  );

  if (error) return handleError(error);
  return (
    <ScrollableContainer isLoading={loading} ref={scrollerRef}>
      {likers.map(liker => (
        <Liker
          key={`_${liker.id}_`}
          liker={liker}
          postId={postId}
          updateFollowing={updateFollowing}
        />
      ))}
    </ScrollableContainer>
  );
};

export default React.memo(Likers);
