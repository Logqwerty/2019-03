import styled from 'styled-components';

import { Flex, Icon } from '@atoms';
import { FLEX_ALIGN, FLEX_DIRECTION, ICON_TYPES } from '@const';

export const ErrorFlex = styled(Flex).attrs(() => ({
  direction: FLEX_DIRECTION.col,
  align: FLEX_ALIGN.center,
  verticalAlign: FLEX_ALIGN.center,
}))`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const FaviconIcon = styled(Icon).attrs(() => ({
  ratio: 10,
  type: ICON_TYPES.favicon,
}))``;

export const ErrorMessage = styled.h2``;
