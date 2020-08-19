import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, StyledAnchor } from './styles';

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

const Link = ({ to, href, ...props }) => {
  if (to) return <StyledLink to={to} {...props} />;
  return <StyledAnchor href={href} {...props} />;
};

Link.propTypes = propTypes;

export default Link;
