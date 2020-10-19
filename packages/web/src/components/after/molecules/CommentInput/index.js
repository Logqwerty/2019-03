import React from 'react';
import PropTypes from 'prop-types';

import { useAddComment } from './hooks';
import {
  CommentInputFlex,
  StyledInput,
  CommentButton,
  SpinnerWrapper,
  InnerSpinner,
} from './styles';

const propTypes = {
  writerId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  myInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    profileImage: PropTypes.string,
  }).isRequired,
  setComments: PropTypes.func.isRequired,
};

const CommentInput = ({ postId, writerId, myInfo, setComments, className }) => {
  const {
    disabled,
    commentValue,
    isLoading,
    onFocus,
    onChange,
    onSubmitComment,
  } = useAddComment({
    writerId,
    postId,
    myInfo,
    setComments,
  });

  return (
    <CommentInputFlex className={className}>
      <SpinnerWrapper>
        {isLoading && <InnerSpinner />}
        <StyledInput
          value={commentValue}
          placeholder="댓글 달기..."
          onChange={onChange}
          onFocus={onFocus}
        />
      </SpinnerWrapper>
      <CommentButton onClick={onSubmitComment} disabled={disabled}>
        게시
      </CommentButton>
    </CommentInputFlex>
  );
};

CommentInput.propTypes = propTypes;

export default CommentInput;
