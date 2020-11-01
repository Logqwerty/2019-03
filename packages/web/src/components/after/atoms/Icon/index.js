import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpan } from './styles';

const propTypes = {
  type: PropTypes.string.isRequired,
  ratio: PropTypes.number,
};

const defaultProps = {
  ratio: 1,
};

const Icon = props => <StyledSpan {...props} />;

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default React.memo(Icon);
