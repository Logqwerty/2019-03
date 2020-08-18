import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const propTypes = {
  direction: PropTypes.string,
  align: PropTypes.string,
  verticalAlign: PropTypes.string,
};

const defaultProps = {
  direction: 'row',
  align: 'start',
  verticalAlign: 'top',
};

const Flex = props => {
  return <S.Wrapper {...props} />;
};

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default Flex;
