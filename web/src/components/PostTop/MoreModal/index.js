import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

import { ModalContent, StyledLink, Modal } from './styles';
import { DELETE_POST } from './queries';
import { FOLLOWING_POST_LIST } from '../../../containers/HomePage/queries';

const MoreModal = ({ isVisible, setIsVisible, writer, myInfo, postURL }) => {
  const [deletePost] = useMutation(DELETE_POST, {
    update(cache, { data: { deletePost } }) {
      const { followingPostList } = cache.readQuery({
        query: FOLLOWING_POST_LIST,
        variables: {
          myId: myInfo.id,
          offset: 0,
          limit: 5,
        },
      });
      cache.writeQuery({
        query: FOLLOWING_POST_LIST,
        variables: {
          myId: myInfo.id,
          offset: 0,
          limit: 5,
        },
        data: {
          followingPostList: followingPostList.filter(
            post => post.postURL !== deletePost.postURL,
          ),
        },
      });
    },
  });

  const clickClose = () => {
    setIsVisible(false);
  };

  const clickDeletePost = () => {
    deletePost({ variables: { postURL } });
    clickClose();
    return <Redirect to="/" />;
  };

  if (!isVisible) return null;

  return (
    <Modal onClick={clickClose}>
      {writer.username !== myInfo.username && writer.isFollow && (
        <>
          <ModalContent followcancel>팔로우 취소</ModalContent>
        </>
      )}
      {writer.username === myInfo.username && (
        <>
          <StyledLink to={`edit/${postURL}`}>
            <ModalContent>게시물 수정</ModalContent>
          </StyledLink>
          <ModalContent onClick={clickDeletePost}>게시물 삭제</ModalContent>
        </>
      )}
      <StyledLink to={`/p/${postURL}`}>
        <ModalContent>게시물로 이동</ModalContent>
      </StyledLink>
      <CopyToClipboard text={`${process.env.REACT_APP_WEB_URL}/p/${postURL}`}>
        <ModalContent>링크 복사하기</ModalContent>
      </CopyToClipboard>
      <ModalContent cancel onClick={clickClose}>
        취소
      </ModalContent>
    </Modal>
  );
};

export default MoreModal;
