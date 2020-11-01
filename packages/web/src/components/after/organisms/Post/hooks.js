import { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { ICON_TYPES } from '@const';

const getHeartType = isLike =>
  isLike ? ICON_TYPES.fullHeart : ICON_TYPES.emptyHeart;

const findPostById = (state, postId) => {
  return state.MAIN.posts.find(({ id }) => id === postId);
};

export const useComments = postId => {
  const { comments, commentCount } = useSelector(state => {
    const post = findPostById(state, postId);
    return {
      comments: (post && post.commentList) || [],
      commentCount: (post && post.commentCount) || 0,
    };
  }, shallowEqual);

  return {
    comments,
    commentCount,
  };
};

export const usePostLike = ({ toggleHeart, ...rest }) => {
  const { isLike, likerCount, heartType } = useSelector(state => {
    const post = findPostById(state, rest.postId);
    return {
      isLike: post.isLike,
      likerCount: post.likerInfo.likerCount,
      heartType: getHeartType(post.isLike),
    };
  }, shallowEqual);

  const onClickHeart = useCallback(() => {
    toggleHeart({ ...rest, isLike });
  }, [rest, isLike, toggleHeart]);

  return {
    heartType,
    likerCount,
    onClickHeart,
  };
};
