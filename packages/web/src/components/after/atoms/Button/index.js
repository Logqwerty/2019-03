import React from 'react';
import PropTypes from 'prop-types';

import { BUTTON_TYPES } from '@const';
import { StyledLink, StyledAnchor, StyledButton } from './styles';

const propTypes = {
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  onlyContent: PropTypes.bool,
  unit: PropTypes.number,
  type: PropTypes.oneOf([
    BUTTON_TYPES.button,
    BUTTON_TYPES.submit,
    BUTTON_TYPES.reset,
  ]),
  href: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.object,
    }),
  ]),
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {},
};

const Button = ({ to, href, type, onClick, ...props }) => {
  if (to) {
    return <StyledLink to={to} {...props} />;
  }
  if (href) {
    return <StyledAnchor href={href} {...props} />;
  }
  return <StyledButton type={type} onClick={onClick} {...props} />;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
