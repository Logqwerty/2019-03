import React from 'react';
import PropTypes from 'prop-types';

import { CommentFlex, Writer, CommentContent, ShowMore } from './styles';
import { useContentWithTag, useFoldText } from './hooks';

const propTypes = {
  writer: PropTypes.shape({
    username: PropTypes.string,
  }),
  contents: PropTypes.string,
};

const defaultProps = {
  contents: '',
};

const Comment = ({ writer, contents, className }) => {
  const convertedContent = useContentWithTag(contents);
  const { textRef, isFolding, onToggleFolding } = useFoldText();
  const { username } = writer;

  return (
    <CommentFlex verticalAlign="center" className={className}>
      <Writer to={`/${username}`}>{username}</Writer>
      <CommentContent isFolding={isFolding} ref={textRef}>
        {convertedContent}
      </CommentContent>
      {isFolding && <ShowMore onClick={onToggleFolding}>더보기</ShowMore>}
    </CommentFlex>
  );
};

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default React.memo(Comment);
