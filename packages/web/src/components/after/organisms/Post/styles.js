import styled from 'styled-components';
import { palette } from 'styled-tools';

import {
  ICON_TYPES,
  POST_WIDTH,
  POST_IMAGE_HEIGHT,
  FLEX_DIRECTION,
} from '@const';
import { Flex, Link, Image, TimePassedText } from '@atoms';
import { IconButton, CommentInput } from '@molecules';

const SPACE_VERTICAL = 16;
const SPACE_HORIZONTAL = 16;

export const PostFlex = styled(Flex).attrs(() => ({
  direction: FLEX_DIRECTION.col,
}))`
  width: ${POST_WIDTH}px;
  border: 1px solid ${palette('border')};
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

export const PostImage = styled(Image)`
  height: ${POST_IMAGE_HEIGHT}px;
`;

export const EllipsisIcon = styled(IconButton).attrs(() => ({
  iconType: ICON_TYPES.ellipsis,
  ratio: 1.75,
}))``;

export const PostIconGroupFlex = styled(Flex)`
  width: 100%;
  padding: ${SPACE_VERTICAL}px ${SPACE_HORIZONTAL}px;
  box-sizing: border-box;

  & > * {
    margin-right: 12px;
  }
`;

export const HeartIcon = styled(IconButton).attrs(() => ({
  ratio: 2.25,
}))``;

export const CommentIcon = styled(IconButton).attrs(() => ({
  iconType: ICON_TYPES.comment,
  ratio: 2.25,
}))``;

export const PostBottomFlex = styled(Flex).attrs(() => ({
  direction: FLEX_DIRECTION.col,
}))`
  width: 100%;
  box-sizing: border-box;
  padding: 0px ${SPACE_HORIZONTAL}px 8px;
`;

export const StyledCommentInput = styled(CommentInput)`
  width: 100%;
  padding: ${SPACE_VERTICAL}px ${SPACE_HORIZONTAL}px;
  box-sizing: border-box;

  border-left: none;
  border-right: none;
  border-bottom: none;
`;

export const StyledTimePassedText = styled(TimePassedText)`
  padding: 0px ${SPACE_HORIZONTAL}px 8px;
`;
