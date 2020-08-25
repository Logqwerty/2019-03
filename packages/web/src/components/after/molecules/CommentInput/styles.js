import styled from 'styled-components';
import { palette } from 'styled-tools';

import { Flex, Button, Input } from '@atoms';

export const CommentInputFlex = styled(Flex)`
  padding: 14px;
  border: 1px solid ${palette('border')};
`;

export const StyledInput = styled(Input).attrs(() => ({
  unit: 0,
}))`
  width: auto;
  flex: 1 0 0;
  border: none;
`;

export const CommentButton = styled(Button).attrs(() => ({
  transparent: true,
  onlyContent: true,
}))``;
