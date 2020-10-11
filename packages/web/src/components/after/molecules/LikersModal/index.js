import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Liker, IconButton } from '@molecules';
import { ICON_TYPES } from '@const';
import { withLikersData } from './hoc';
import {
  StyledModal,
  HeaderFlex,
  Title,
  ScrollableContainer,
  SpinnerWapper,
  InnerSpinner,
} from './styles';

const propTypes = {
  likers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profileImage: PropTypes.string,
      isFollow: PropTypes.number.isRequired,
      likedAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  myId: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const LikersModal = forwardRef(
  ({ likers, myId, isLoading, isOpen, onCloseModal }, ref) => {
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
        <ScrollableContainer ref={ref}>
          {likers.map(({ id, username, profileImage, isFollow }) => (
            <Liker
              key={`_${username}_`}
              username={username}
              profileImage={profileImage}
              followStatus={isFollow}
              myId={myId}
              userId={id}
            />
          ))}
          {isLoading && (
            <SpinnerWapper>
              <InnerSpinner />
            </SpinnerWapper>
          )}
        </ScrollableContainer>
      </StyledModal>
    );
  },
);

LikersModal.propTypes = propTypes;

export default withLikersData(LikersModal);
