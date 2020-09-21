import React from 'react';
import PropTypes from 'prop-types';

import { SpinnerWrapper, SpinnerContent } from './styles';

const propTypes = {
  size: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
};

const Spinner = ({ size, width, color }) => {
  return (
    <SpinnerWrapper size={size}>
      <SpinnerContent width={width} color={color} />
    </SpinnerWrapper>
  );
};

Spinner.propTypes = propTypes;

export default Spinner;
