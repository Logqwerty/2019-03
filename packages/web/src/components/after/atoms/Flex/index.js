import React from 'react';
import PropTypes from 'prop-types';

import { FLEX_DIRECTION, FLEX_ALIGN } from '@const';
import { StyledDiv } from './styles';

const propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  verticalAlign: PropTypes.string,
};

const defaultProps = {
  direction: FLEX_DIRECTION.row,
  align: FLEX_ALIGN.flexStart,
  verticalAlign: FLEX_ALIGN.flexEnd,
};

const Flex = React.forwardRef((props, ref) => {
  return <StyledDiv {...props} ref={ref} />;
});

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default Flex;
