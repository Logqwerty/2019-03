import React from 'react';
import PropTypes from 'prop-types';

import { FolloCancelModal } from '@molecules';

import { useMyInfoCookie } from '@hooks';
import { useFollowButton } from './hooks';
import { StyledButton, InnerSpinner } from './styles';

const propTypes = {
  userId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  updateFollowing: PropTypes.func.isRequired,
};

const FollowButton = ({ userId, postId, updateFollowing }) => {
  const { id: myId } = useMyInfoCookie();
  const {
    isLoading,
    isFollowing,
    isOpen,
    displayedText,
    onCloseModal,
    onRequestFollowing,
    onCancelFollowing,
  } = useFollowButton({
    myId,
    userId,
    postId,
    updateFollowing,
  });

  return (
    <>
      <StyledButton
        onClick={onRequestFollowing}
        isFollowing={isFollowing}
        isLoading={isLoading}
      >
        {displayedText}
        {isLoading && <InnerSpinner reverse={!isFollowing} />}
      </StyledButton>
      <FolloCancelModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        onCancelFollowing={onCancelFollowing}
        userId={userId}
        postId={postId}
        isLoading={isLoading}
      />
    </>
  );
};

FollowButton.propTypes = propTypes;

export default React.memo(FollowButton);
