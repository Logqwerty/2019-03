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
  myId: PropTypes.string.isRequired,
  myName: PropTypes.string.isRequired,
  writerId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  addComment: PropTypes.func,
};

const CommentInput = ({
  myId,
  myName,
  postId,
  writerId,
  addComment,
  className,
}) => {
  const {
    disabled,
    commentValue,
    loading,
    onFocus,
    onChange,
    onSubmitComment,
  } = useAddComment({
    writerId,
    postId,
    myName,
    myId,
    addComment,
  });

  return (
    <CommentInputFlex className={className}>
      <SpinnerWrapper>
        {loading && <InnerSpinner />}
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

export default React.memo(CommentInput);
