import React from 'react';
import PropTypes from 'prop-types';

import { FolloCancelModal } from '@molecules';

import { useFollowButton } from './hooks';
import { StyledFollowButton, InnerSpinner } from './styles';

const propTypes = {
  followStatus: PropTypes.number,
  myId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
};

const FollowButton = ({
  followStatus,
  myId,
  userId,
  username,
  profileImage,
}) => {
  const {
    isLoading,
    isModalOpen,
    isFollowing,
    displayedText,
    onCloseModal,
    onRequestFollowing,
    onCancelFollowing,
  } = useFollowButton({
    followStatus,
    myId,
    userId,
  });

  return (
    <>
      <StyledFollowButton
        onClick={onRequestFollowing}
        isFollowing={isFollowing}
        isLoading={isLoading}
      >
        {displayedText}
        {isLoading && <InnerSpinner reverse={!isFollowing} />}
      </StyledFollowButton>
      <FolloCancelModal
        isOpen={isModalOpen}
        onCloseModal={onCloseModal}
        onCancelFollowing={onCancelFollowing}
        username={username}
        profileImage={profileImage}
      />
    </>
  );
};

FollowButton.propTypes = propTypes;

export default FollowButton;
