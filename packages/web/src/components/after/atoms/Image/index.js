import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  round: PropTypes.bool,
};

const Image = ({ src, alt, round }) => {
  return <S.Img src={src} alt={alt} round={round} />;
};

Image.propTypes = propTypes;

export default Image;
