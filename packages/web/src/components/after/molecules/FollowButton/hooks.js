import { useState, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { FOLLOW_STATUS, FOLLOW_STATUS_TEXT } from '@const';
import { useModalContext } from '../../../../contexts';
import {
  REQUEST_FOLLOWING,
  REQUEST_FOLLOWING_CANCELLATION,
} from '../../../../queries';

const useMutateFollowing = (query, setFollowStatus) => {
  const isCalled = useRef(false);
  const [mutate, { loading, data }] = useMutation(query);

  const nextFollowStatus =
    query === REQUEST_FOLLOWING ? FOLLOW_STATUS.following : FOLLOW_STATUS.none;

  const mutateFollowing = options => {
    mutate(options);
    isCalled.current = true;
  };

  if (isCalled.current && !!data) {
    setFollowStatus(nextFollowStatus);
    isCalled.current = false;
  }

  return {
    mutateFollowing,
    loading,
  };
};

export const useFollowButton = ({ followStatus, myId, userId }) => {
  const { isOpen: isModalOpen, onOpenModal, onCloseModal } = useModalContext();
  const [curFollowStatus, setFollowStatus] = useState(followStatus);
  const {
    mutateFollowing: requestFollowing,
    loading: followingLoading,
  } = useMutateFollowing(REQUEST_FOLLOWING, setFollowStatus);
  const {
    mutateFollowing: cancelFollowing,
    loading: cancelLoading,
  } = useMutateFollowing(REQUEST_FOLLOWING_CANCELLATION, setFollowStatus);

  const displayedText = FOLLOW_STATUS_TEXT[curFollowStatus];
  const isFollowing = curFollowStatus === FOLLOW_STATUS.following;
  const isLoading = followingLoading || cancelLoading;

  const onRequestFollowing = () => {
    if (curFollowStatus === FOLLOW_STATUS.none) {
      requestFollowing({ variables: { myId, userId } });
      return;
    }
    onOpenModal();
  };

  const onCancelFollowing = () => {
    cancelFollowing({ variables: { myId, userId } });
    onCloseModal();
  };

  return {
    displayedText,
    isFollowing,
    isLoading,
    isModalOpen,
    onCloseModal,
    onRequestFollowing,
    onCancelFollowing,
  };
};
