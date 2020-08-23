import React, { useState, useRef, useEffect } from 'react';

import { TagLink } from './styles';

export const useFoldText = () => {
  const textRef = useRef(null);
  const [isFolding, setIsFolding] = useState(true);

  const onToggleFolding = () => {
    setIsFolding(!isFolding);
  };

  useEffect(() => {
    const { offsetWidth, scrollWidth } = textRef.current;
    const isOverflow = offsetWidth < scrollWidth;
    setIsFolding(isOverflow);
  }, []);

  return {
    textRef,
    isFolding,
    onToggleFolding,
  };
};

const convertToLink = token => {
  if (token === '') return '\xa0';

  const tag = token.substring(0, 1);
  if (tag !== '@' && tag !== '#') return `${token} `;

  const path = token.substring(1);
  const to = tag === '@' ? `/${path}` : `/h/${path}`;
  return (
    <TagLink key={to} to={to}>
      {token}{' '}
    </TagLink>
  );
};

export const useContentWithTag = contents => {
  const tokens = contents.split(' ');
  return tokens.map(convertToLink);
};
