import styled from 'styled-components';
import { palette } from 'styled-tools';

import { Flex, Button, Input, Spinner } from '@atoms';
import { FLEX_ALIGN } from '@const';

export const CommentInputFlex = styled(Flex).attrs(() => ({
  verticalAlign: FLEX_ALIGN.center,
}))`
  padding: 14px;
  border: 1px solid ${palette('border')};
`;

export const StyledInput = styled(Input).attrs(() => ({
  unit: 0,
}))`
  width: 100%;
  height: 1.1rem;
  border: none;
`;

export const CommentButton = styled(Button).attrs(() => ({
  transparent: true,
  onlyContent: true,
}))`
  font-weight: bold;
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  flex: 1 0 0;
`;

export const InnerSpinner = styled(Spinner).attrs(() => ({
  size: '1rem',
  width: '2px',
}))`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
