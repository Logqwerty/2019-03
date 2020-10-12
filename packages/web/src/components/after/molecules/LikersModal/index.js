import React from 'react';
import PropTypes from 'prop-types';

import { Liker, IconButton, ScrollableContainer } from '@molecules';
import { ICON_TYPES } from '@const';
import { StyledModal, HeaderFlex, Title } from './styles';
import { useFetchLikers } from './hooks';
import { useInfiniteScroll } from '../../../../hooks';

const propTypes = {
  myId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const LikersModal = ({ myId, postId, isOpen, onCloseModal }) => {
  const { fetchMoreLikers, initLoading, likers } = useFetchLikers(myId, postId);
  const { isLoading, scrollerRef } = useInfiniteScroll(fetchMoreLikers);

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
      <ScrollableContainer
        isLoading={isLoading || initLoading}
        ref={scrollerRef}
      >
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
      </ScrollableContainer>
    </StyledModal>
  );
};

LikersModal.propTypes = propTypes;

export default LikersModal;
