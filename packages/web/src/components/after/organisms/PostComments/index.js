import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '@molecules';
import { ShowMoreComments } from './styles';

const propTypes = {
  postURL: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
      writer: PropTypes.shape({
        username: PropTypes.string,
      }),
    }),
  ).isRequired,
};

const PostComments = ({ postURL, comments }) => {
  return (
    <>
      {comments.length >= 3 && (
        <ShowMoreComments to={`/p/${postURL}`}>
          댓글 {comments.length}개 모두 보기
        </ShowMoreComments>
      )}
      {comments.map(({ writer: commenter, content: commentContents }) => (
        <Comment
          key={`__${commenter.username}__`}
          writer={commenter}
          contents={commentContents}
        />
      ))}
    </>
  );
};

PostComments.propTypes = propTypes;

export default PostComments;
