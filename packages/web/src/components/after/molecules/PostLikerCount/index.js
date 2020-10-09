import React from 'react';
import PropTypes from 'prop-types';

import { LikersModal } from '@molecules';
import { useModalContext } from '@contexts';
import { StyledButton } from './styles';

const propTypes = {
  likerCount: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired,
};

const PostLikerCount = ({ myId, postId, likerCount }) => {
  const { isOpen, onCloseModal, onOpenModal } = useModalContext();
  if (likerCount <= 0) return null;
  return (
    <>
      <StyledButton onClick={onOpenModal}>좋아요 {likerCount}개</StyledButton>
      <LikersModal
        myId={myId}
        postId={postId}
        isOpen={isOpen}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

PostLikerCount.propTypes = propTypes;

export default PostLikerCount;
