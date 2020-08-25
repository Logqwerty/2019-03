import { NavLink as _NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { prop, palette } from 'styled-tools';

const styles = css`
  text-decoration: none;
  font-weight: ${prop('fontWeight', 400)};
  color: ${prop('color', palette('primary', 2))};

  &:hover {
    text-decoration: underline;
  }
`;

export const NavLink = styled(_NavLink)`
  ${styles}
`;

export const Anchor = styled.a`
  ${styles}
`;
