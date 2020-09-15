import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MODAL_MENU_POSITION } from '@const';
import { Modal, ModalMenu } from '@atoms';
import { useDeletePost } from './hooks';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  isMine: PropTypes.bool.isRequired,
  postURL: PropTypes.string.isRequired,
};

const PostModal = ({ isOpen, onCloseModal, isMine, postURL }) => {
  const { isDeleted, onDeletePost } = useDeletePost({ postURL, onCloseModal });

  if (isDeleted) return <Redirect to="/" />;
  return (
    <Modal isOpen={isOpen}>
      {isMine && (
        <>
          <ModalMenu position={MODAL_MENU_POSITION.top} to={`/edit/${postURL}`}>
            게시물 수정
          </ModalMenu>
          <ModalMenu onClick={onDeletePost}>게시물 삭제</ModalMenu>
        </>
      )}
      <ModalMenu
        position={isMine ? MODAL_MENU_POSITION.middle : MODAL_MENU_POSITION.top}
        to={`/p/${postURL}`}
        onClick={onCloseModal}
      >
        게시물로 이동
      </ModalMenu>
      <ModalMenu
        textToCopy={`${process.env.REACT_APP_WEB_URL}/p/${postURL}`}
        onClick={onCloseModal}
      >
        링크 복사하기
      </ModalMenu>
      <ModalMenu position={MODAL_MENU_POSITION.bottom} onClick={onCloseModal}>
        취소
      </ModalMenu>
    </Modal>
  );
};

PostModal.propTypes = propTypes;

export default PostModal;
