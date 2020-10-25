import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MODAL_MENU_POSITION } from '@const';
import { Modal, ModalMenu } from '@atoms';
import * as selector from './selectors';

const propTypes = {
  deletePost: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

const PostModal = ({ isMine, postId, deletePost, isOpen, onCloseModal }) => {
  const { postURL } = useSelector(selector.post(postId));
  const onDeletePost = useCallback(() => {
    onCloseModal();
    deletePost(postId, postURL);
  }, [deletePost, postId, postURL, onCloseModal]);

  // if (isDeleted) return <Redirect to="/" />;
  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
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
