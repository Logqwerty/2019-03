import React from 'react';
import PropTypes from 'prop-types';

import { SpinnerWrapper, SpinnerContent } from './styles';

const propTypes = {
  size: PropTypes.string,
  width: PropTypes.string,
  foreColor: PropTypes.string,
  backColor: PropTypes.string,
  reverse: PropTypes.bool,
};

const Spinner = ({ size, width, foreColor, backColor, reverse, className }) => {
  return (
    <SpinnerWrapper size={size} className={className}>
      <SpinnerContent
        width={width}
        foreColor={foreColor}
        backColor={backColor}
        reverse={reverse}
      />
    </SpinnerWrapper>
  );
};

Spinner.propTypes = propTypes;

export default Spinner;
