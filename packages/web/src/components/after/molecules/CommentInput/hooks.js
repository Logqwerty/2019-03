import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_COMMENT } from '@queries';

const EMPTY_STRING = '';

const makePartialVariables = (writerId, postId, myId) => content => ({
  content,
  WriterId: writerId,
  PostId: postId,
  UserId: myId,
});

export const useAddComment = ({
  writerId,
  postId,
  myId,
  myName,
  addComment,
}) => {
  const partialVariables = makePartialVariables(writerId, postId, myId);
  const [commentValue, setCommentValue] = useState(EMPTY_STRING);
  const [createComment, { loading }] = useMutation(CREATE_COMMENT);

  const onFocus = ({ target }) => {
    if (loading) target.blur();
  };
  const onChange = ({ target: { value } }) => {
    if (loading) return;
    setCommentValue(value);
  };
  const onSubmitComment = async e => {
    e.preventDefault();
    if (loading) return;
    const variables = partialVariables(commentValue);
    const { data } = await createComment({ variables });
    const newComment = {
      id: data.createComment.id,
      content: commentValue,
      writer: {
        username: myName,
      },
    };
    addComment(postId, newComment);
    setCommentValue(EMPTY_STRING);
  };

  return {
    disabled: commentValue === EMPTY_STRING,
    loading,
    commentValue,
    onChange,
    onSubmitComment,
    onFocus,
  };
};
