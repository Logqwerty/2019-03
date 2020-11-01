import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '@molecules';
import { ShowMoreComments } from './styles';

const propTypes = {
  postURL: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
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

const PostComments = ({ postURL, commentCount, comments }) => {
  const totalCount =
    commentCount >= comments.length ? commentCount : comments.length;
  return (
    <>
      {totalCount >= 3 && (
        <ShowMoreComments to={`/p/${postURL}`}>
          댓글 {comments.length}개 모두 보기
        </ShowMoreComments>
      )}
      {comments.map(({ id, writer: commenter, content: commentContents }) => (
        <Comment
          key={`__${id}__`}
          writer={commenter}
          contents={commentContents}
        />
      ))}
    </>
  );
};

PostComments.propTypes = propTypes;

export default React.memo(PostComments);
