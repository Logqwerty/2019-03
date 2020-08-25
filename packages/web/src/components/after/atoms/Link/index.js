import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const propTypes = {
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
};

const Link = ({ to, ...props }) => {
  if (to) return <S.NavLink to={to} {...props} />;
  return <S.Anchor {...props} />;
};

Link.propTypes = propTypes;

export default Link;
