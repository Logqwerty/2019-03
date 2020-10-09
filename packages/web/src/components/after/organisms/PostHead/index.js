import React from 'react';
import PropTypes from 'prop-types';

import { Profile, PostModal } from '@molecules';
import { useModalContext } from '@contexts';
import { StyledFlex, Username, EllipsisIcon } from './styles';

const propTypes = {
  writerName: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  postURL: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

const PostHead = ({ writerName, profileImage, postURL, isMine }) => {
  const { isOpen, onOpenModal, onCloseModal } = useModalContext();

  return (
    <StyledFlex verticalAlign="center">
      <Profile to={`/${writerName}`} imgUrl={profileImage} ratio={10} />
      <Username to={`/${writerName}`}>{writerName}</Username>
      <EllipsisIcon onClick={onOpenModal} />
      <PostModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        postURL={postURL}
        isMine={isMine}
      />
    </StyledFlex>
  );
};

PostHead.propTypes = propTypes;

export default PostHead;
