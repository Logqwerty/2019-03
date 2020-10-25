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

const Button = ({
  to,
  href,
  type,
  transparent,
  onlyContent,
  onClick,
  ...props
}) => {
  if (to) {
    return <StyledLink to={to} transparent={1} nopadding={1} {...props} />;
  }
  if (href) {
    return (
      <StyledAnchor href={href} transparent={1} nopadding={1} {...props} />
    );
  }
  return (
    <StyledButton
      type={type}
      transparent={transparent}
      nopadding={onlyContent}
      onClick={onClick}
      {...props}
    />
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
