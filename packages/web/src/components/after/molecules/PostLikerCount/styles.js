import styled from 'styled-components';
import { palette } from 'styled-tools';

import { Button } from '@atoms';

export const StyledButton = styled(Button).attrs(() => ({
  transparent: true,
  onlyContent: true,
}))`
  color: ${palette('black')};
  font-weight: 600;
  font-size: 1rem;

  margin-bottom: 8px;
`;
