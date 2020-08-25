import React from 'react';
import PropTypes from 'prop-types';

import { CommentInputFlex, StyledInput, CommentButton } from './styles';

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  submitDisabled: PropTypes.bool,
};

const CommentInput = ({ value, onChange, submitDisabled, className }) => {
  return (
    <CommentInputFlex verticalAlign="center" className={className}>
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder="댓글 달기..."
      />
      <CommentButton disabled={submitDisabled}>게시</CommentButton>
    </CommentInputFlex>
  );
};

CommentInput.propTypes = propTypes;

export default CommentInput;
