import styled from 'styled-components';
import { palette } from 'styled-tools';

import { Link, Flex } from '@atoms';
import { FLEX_ALIGN } from '@const';

export const LikerFlex = styled(Flex).attrs(() => ({
  verticalAlign: FLEX_ALIGN.center,
}))`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
`;

export const LikerName = styled(Link)`
  flex: 1 0 auto;
  margin-left: 8px;
  margin-right: 8px;

  color: ${palette('black')};
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.5;

  &:hover {
    text-decoration: none;
  }
`;
