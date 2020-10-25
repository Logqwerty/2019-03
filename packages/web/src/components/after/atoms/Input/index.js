import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styles';

const propTypes = {
  unit: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const defaultProps = {
  type: 'text',
  onChange: () => {},
};

const Input = props => <StyledInput {...props} />;

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default React.memo(Input);
