import { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';

import { DELETE_POST } from '../../../../queries';

export const useDeletePost = ({ postURL, onCloseModal }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [deletePost] = useMutation(DELETE_POST);

  const onDeletePost = () => {
    deletePost({ variables: { postURL } });
    onCloseModal();
    setIsDeleted(true);
  };

  return {
    onDeletePost,
    isDeleted,
  };
};
