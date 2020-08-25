import { useState, useRef } from 'react';

import { ICON_TYPES } from '@const';

const getHeartType = isLike =>
  isLike ? ICON_TYPES.fullHeart : ICON_TYPES.emptyHeart;
const toggleHeartType = type =>
  type === ICON_TYPES.fullHeart ? ICON_TYPES.emptyHeart : ICON_TYPES.fullHeart;

export const useToggleHeart = ({ likerInfo, isLike }) => {
  const likerCount = useRef(likerInfo.likerCount);
  const [heartType, setHeartType] = useState(getHeartType(isLike));

  const onClickHeartIcon = () => {
    // sync like data with server
    setHeartType(prevType => {
      const delta = prevType === ICON_TYPES.emptyHeart ? 1 : -1;
      likerCount.current += delta;
      return toggleHeartType(prevType);
    });
  };

  return {
    heartType,
    likerCount: likerCount.current,
    onClickHeartIcon,
  };
};
