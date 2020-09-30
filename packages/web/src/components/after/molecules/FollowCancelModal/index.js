import React from 'react';
import PropTypes from 'prop-types';

import { ModalMenu } from '@atoms';
import { MODAL_MENU_POSITION } from '@const';
import {
  ProfileImage,
  ModalTopFlex,
  CancelMessage,
  StyledModal,
  FollowCancelMenu,
} from './styles';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onCancelFollowing: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
};

const FollowCancelModal = ({
  isOpen,
  onCloseModal,
  onCancelFollowing,
  username,
  profileImage,
}) => {
  return (
    <StyledModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <ModalTopFlex>
        <ProfileImage src={profileImage} round />
        <CancelMessage>@{username}님의 팔로우를 취소하시겠어요?</CancelMessage>
      </ModalTopFlex>
      <FollowCancelMenu onClick={onCancelFollowing} danger>
        팔로우 취소
      </FollowCancelMenu>
      <ModalMenu position={MODAL_MENU_POSITION.bottom} onClick={onCloseModal}>
        취소
      </ModalMenu>
    </StyledModal>
  );
};

FollowCancelModal.propTypes = propTypes;

export default FollowCancelModal;
