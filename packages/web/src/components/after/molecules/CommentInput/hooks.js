import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CREATE_COMMENT } from '../../../../queries';

const EMPTY_STRING = '';

const makePartialVariables = (writerId, postId, myId) => content => ({
  content,
  WriterId: writerId,
  PostId: postId,
  UserId: myId,
});

export const useAddComment = ({ writerId, postId, myInfo, setComments }) => {
  const partialVariables = makePartialVariables(writerId, postId, myInfo.id);
  const [commentValue, setCommentValue] = useState(EMPTY_STRING);
  const [addComment, { loading }] = useMutation(CREATE_COMMENT);

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
    const { data } = await addComment({
      variables: partialVariables(commentValue),
    });

    setComments(prev => [
      ...prev,
      {
        id: data.createComment.id,
        content: commentValue,
        writer: {
          username: myInfo.username,
        },
      },
    ]);
    setCommentValue(EMPTY_STRING);
  };

  return {
    disabled: commentValue === EMPTY_STRING,
    isLoading: loading,
    commentValue,
    onChange,
    onSubmitComment,
    onFocus,
  };
};
