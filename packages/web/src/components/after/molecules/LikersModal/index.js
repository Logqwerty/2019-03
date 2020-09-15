import React from 'react';
import PropTypes from 'prop-types';

import { Liker, IconButton } from '@molecules';
import { ICON_TYPES } from '@const';
import { StyledModal, HeaderFlex, Title, ScrollableContainer } from './styles';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  likers: PropTypes.shape({
    username: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
    followStatus: PropTypes.number,
    myId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }),
};

const LikersModal = ({ isOpen, onCloseModal, likers }) => {
  return (
    <StyledModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <HeaderFlex>
        <Title>좋아요</Title>
        <IconButton
          iconType={ICON_TYPES.cancel}
          ratio={2}
          onClick={onCloseModal}
        />
      </HeaderFlex>
      <ScrollableContainer>
        {likers &&
          likers.map(
            ({ username, profileImage, followStatus, myId, userId }) => (
              <Liker
                key={`_${username}_`}
                username={username}
                profileImage={profileImage}
                followStatus={followStatus}
                myId={myId}
                userId={userId}
              />
            ),
          )}
      </ScrollableContainer>
    </StyledModal>
  );
};

LikersModal.propTypes = propTypes;

export default LikersModal;
