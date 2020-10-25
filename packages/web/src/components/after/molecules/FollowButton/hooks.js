import { useMutation } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';

import { FOLLOW_STATUS, FOLLOW_STATUS_TEXT } from '@const';
import { useModalContext } from '@contexts';
import { REQUEST_FOLLOWING, REQUEST_FOLLOWING_CANCELLATION } from '@queries';
import * as selector from './selectors';

export const useFollowButton = ({ myId, userId, postId, updateFollowing }) => {
  const { isOpen, onOpenModal, onCloseModal } = useModalContext();
  const { isFollow } = useSelector(selector.liker(postId, userId));
  const [requestFollowing, { loading: followingLoading }] = useMutation(
    REQUEST_FOLLOWING,
  );
  const [cancelFollowing, { loading: cancelLoading }] = useMutation(
    REQUEST_FOLLOWING_CANCELLATION,
  );

  const displayedText = FOLLOW_STATUS_TEXT[isFollow];
  const isFollowing = isFollow === FOLLOW_STATUS.following;
  const isLoading = followingLoading || cancelLoading;

  const onRequestFollowing = async () => {
    if (isFollow === FOLLOW_STATUS.none) {
      await requestFollowing({ variables: { myId, userId } });
      updateFollowing({ postId, userId, isFollow });
      return;
    }
    onOpenModal();
  };

  const onCancelFollowing = async () => {
    await cancelFollowing({ variables: { myId, userId } });
    updateFollowing({ postId, userId, isFollow });
    onCloseModal();
  };

  return {
    displayedText,
    isFollowing,
    isLoading,
    isOpen,
    onCloseModal,
    onRequestFollowing,
    onCancelFollowing,
  };
};
