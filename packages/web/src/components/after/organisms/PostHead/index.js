import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Profile } from '@molecules';
import { PostModal } from '@organisms';
import { useModalContext } from '@contexts';
import { useMyInfoCookie } from '@hooks';
import { PostHeadFlex, Username, EllipsisIcon } from './styles';
import * as selector from './selectors';

const propTypes = {
  postId: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const PostHead = ({ postId, deletePost }) => {
  const { id: myId } = useMyInfoCookie();
  const { isOpen, onOpenModal, onCloseModal } = useModalContext();
  const { id: writerId, username, profileImage } = useSelector(
    selector.writer(postId),
  );
  const isMine = myId === writerId;

  return (
    <PostHeadFlex>
      <Profile to={`/${username}`} imgUrl={profileImage} ratio={10} />
      <Username to={`/${username}`}>{username}</Username>
      <EllipsisIcon onClick={onOpenModal} />
      <PostModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        postId={postId}
        deletePost={deletePost}
        isMine={isMine}
      />
    </PostHeadFlex>
  );
};

PostHead.propTypes = propTypes;

export default React.memo(PostHead);
