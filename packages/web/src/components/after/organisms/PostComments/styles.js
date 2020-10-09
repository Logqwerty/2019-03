import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from 'styled-tools';

export const ShowMoreComments = styled(Link)`
  color: ${palette('grayscale', 5)};
  font-size: 0.9rem;

  margin-bottom: 8px;

  &:hover {
    text-decoration: none;
  }
`;
