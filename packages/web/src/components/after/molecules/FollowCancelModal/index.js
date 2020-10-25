import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { ModalMenu } from '@atoms';
import { MODAL_MENU_POSITION } from '@const';
import * as selector from '../FollowButton/selectors';
import {
  StyledProfile,
  ModalTopFlex,
  CancelMessage,
  StyledModal,
  FollowCancelMenu,
  InnerSpinner,
} from './styles';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onCancelFollowing: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
};

const FollowCancelModal = ({
  isOpen,
  onCloseModal,
  onCancelFollowing,
  isLoading,
  userId,
  postId,
}) => {
  const { username, profileImage } = useSelector(
    selector.liker(postId, userId),
  );

  return (
    <StyledModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <ModalTopFlex>
        <StyledProfile imgUrl={profileImage} />
        <CancelMessage>@{username}님의 팔로우를 취소하시겠어요?</CancelMessage>
      </ModalTopFlex>
      <FollowCancelMenu onClick={onCancelFollowing} danger>
        팔로우 취소
      </FollowCancelMenu>
      <ModalMenu position={MODAL_MENU_POSITION.bottom} onClick={onCloseModal}>
        취소
      </ModalMenu>
      {isLoading && <InnerSpinner />}
    </StyledModal>
  );
};

FollowCancelModal.propTypes = propTypes;

export default FollowCancelModal;
