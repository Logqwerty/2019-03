import styled from 'styled-components';
import { palette } from 'styled-tools';

import { POST_SPACE_VERTICAL, POST_SPACE_HORIZONTAL, ICON_TYPES } from '@const';
import { Flex, Link } from '@atoms';
import { IconButton } from '@molecules';

export const StyledFlex = styled(Flex)`
  width: 100%;
  padding: ${POST_SPACE_VERTICAL}px ${POST_SPACE_HORIZONTAL}px;
  box-sizing: border-box;
  border-bottom: 1px solid ${palette('border')};
`;

export const Username = styled(Link)`
  color: ${palette('black')};
  font-weight: 600;
  margin-left: 10px;
  margin-right: auto;

  &:hover {
    text-decoration: none;
  }
`;

export const EllipsisIcon = styled(IconButton).attrs(() => ({
  iconType: ICON_TYPES.ellipsis,
  ratio: 1.75,
}))``;
