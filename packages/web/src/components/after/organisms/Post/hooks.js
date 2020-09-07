import { useState, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { ICON_TYPES } from '@const';
import { CREATE_POST_LIKE, DELETE_POST_LIKE } from '../../../../queries';

const getHeartType = isLike =>
  isLike ? ICON_TYPES.fullHeart : ICON_TYPES.emptyHeart;

export const useToggleHeart = (
  { likerInfo, isLike, id: postId, writer: { id: writerId } },
  { id: userId },
) => {
  const likerCount = useRef(likerInfo.likerCount);
  const [heartType, setHeartType] = useState(getHeartType(isLike));
  const [createPostLike] = useMutation(CREATE_POST_LIKE);
  const [deletePostLike] = useMutation(DELETE_POST_LIKE);

  const onClickHeartIcon = () => {
    setHeartType(prevType => {
      let nextType;
      if (prevType === ICON_TYPES.fullHeart) {
        nextType = ICON_TYPES.emptyHeart;
        likerCount.current -= 1;
        deletePostLike({
          variables: { PostId: postId, UserId: userId },
        });
      } else {
        nextType = ICON_TYPES.fullHeart;
        likerCount.current += 1;
        createPostLike({
          variables: { PostId: postId, WriterId: writerId, UserId: userId },
        });
      }
      return nextType;
    });
  };

  return {
    heartType,
    likerCount: likerCount.current,
    onClickHeartIcon,
  };
};
