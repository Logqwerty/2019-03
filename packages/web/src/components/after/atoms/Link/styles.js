import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette } from 'styled-tools';

const styles = css`
  text-decoration: none;
  font-weight: 400;
  color: ${palette('primary', 2)};

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  ${styles}
`;

export const StyledAnchor = styled.a`
  ${styles}
`;
