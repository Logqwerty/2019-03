import React from 'react';
import PropTypes from 'prop-types';
import { StyledImg } from './styles';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  round: PropTypes.bool,
};

const Image = ({ src, alt, round, ...props }) => {
  return <StyledImg src={src} alt={alt} round={round} {...props} />;
};

Image.propTypes = propTypes;

export default Image;
