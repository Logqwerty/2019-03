import styled from 'styled-components';
import { palette } from 'styled-tools';

import { ICON_TYPES, POST_WIDTH, POST_IMAGE_HEIGHT } from '@const';
import { Flex, Link, Image, Button } from '@atoms';
import { IconButton, CommentInput } from '@molecules';

const SPACE_VERTICAL = 16;
const SPACE_HORIZONTAL = 16;

export const PostFlex = styled(Flex)`
  width: ${POST_WIDTH}px;
  border: 1px solid ${palette('border')};
`;

export const PostTopFlex = styled(Flex)`
  width: 100%;
  padding: ${SPACE_VERTICAL}px ${SPACE_HORIZONTAL}px;
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
  iconType: ICON_TYPES.emptyHeart,
  ratio: 2.25,
}))``;

export const CommentIcon = styled(IconButton).attrs(() => ({
  iconType: ICON_TYPES.comment,
  ratio: 2.25,
}))``;

export const LikeInformation = styled(Button).attrs(() => ({
  transparent: true,
  onlyContent: true,
}))`
  color: ${palette('black')};
  font-weight: 600;
  font-size: 1rem;

  margin-bottom: 8px;
`;

export const PostBottomFlex = styled(Flex)`
  width: 100%;
  box-sizing: border-box;

  padding-left: ${SPACE_HORIZONTAL}px;
  padding-right: ${SPACE_HORIZONTAL}px;
  padding-bottom: 16px;
`;

export const ShowMoreComments = styled(Link)`
  color: ${palette('grayscale', 5)};
  font-size: 0.9rem;

  margin-bottom: 8px;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledCommentInput = styled(CommentInput)`
  width: 100%;
  padding: ${SPACE_VERTICAL}px ${SPACE_HORIZONTAL}px;
  box-sizing: border-box;

  border-left: none;
  border-right: none;
  border-bottom: none;
`;
