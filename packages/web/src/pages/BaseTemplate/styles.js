import styled from 'styled-components';

import { Flex } from '@atoms';
import { FLEX_DIRECTION, FLEX_ALIGN } from '@const';

export const BaseTemplateFlex = styled(Flex).attrs(() => ({
  direction: FLEX_DIRECTION.col,
  align: FLEX_ALIGN.center,
  vericalAlign: FLEX_ALIGN.center,
}))``;
