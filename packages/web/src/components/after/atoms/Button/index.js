import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const propTypes = {
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  onlyContent: PropTypes.bool,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  unit: PropTypes.number,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
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
  disabled,
  transparent,
  onlyContent,
  fontSize,
  fontWeight,
  unit,
  onClick,
  ...props
}) => {
  if (to) {
    return (
      <S.Link
        to={to}
        unit={unit}
        disabled={disabled}
        transparent={transparent}
        onlyContent={onlyContent}
        fontSize={fontSize}
        fontWeight={fontWeight}
        {...props}
      />
    );
  }
  if (href) {
    return (
      <S.Anchor
        href={href}
        unit={unit}
        disabled={disabled}
        transparent={transparent}
        onlyContent={onlyContent}
        fontSize={fontSize}
        fontWeight={fontWeight}
        {...props}
      />
    );
  }
  return (
    <S.Button
      type={type}
      onClick={onClick}
      unit={unit}
      disabled={disabled}
      transparent={transparent}
      onlyContent={onlyContent}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    />
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
