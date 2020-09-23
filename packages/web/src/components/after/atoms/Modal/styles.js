import styled from 'styled-components';
import { palette } from 'styled-tools';

import { Flex } from '@atoms';

export const Overlay = styled(Flex).attrs(() => ({
  align: 'center',
  verticalAlign: 'center',
}))`
  position: fixed;
  z-index: 700;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
`;

export const Wrapper = styled(Flex).attrs(() => ({
  direction: 'column',
  align: 'center',
  verticalAlign: 'center',
}))`
  width: 320px;
  padding: 0;
  margin: auto;

  border-radius: 10px;
  background-color: ${palette('white')};
`;
