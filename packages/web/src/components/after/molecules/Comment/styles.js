import styled from 'styled-components';
import { palette, ifProp } from 'styled-tools';

import { Button, Link, Flex } from '@atoms';

export const CommentFlex = styled(Flex)`
  width: 100%;
`;

export const Writer = styled(Link)`
  align-self: flex-start;
  margin-right: 8px;

  color: ${palette('black')};
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;

  &:hover {
    text-decoration: none;
  }
`;

export const CommentContent = styled.span`
  flex: 1;
  margin-right: 8px;

  font-size: 0.95rem;
  line-height: 1.5;

  white-space: ${ifProp('isFolding', 'nowrap', 'normal')};
  text-overflow: ${ifProp('isFolding', 'ellipsis', '')};
  overflow: ${ifProp('isFolding', 'hidden', 'auto')};
`;

export const ShowMore = styled(Button).attrs(() => ({
  transparent: true,
  onlyContent: true,
}))`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${palette('grayscale', 5)};
`;

export const TagLink = styled(Link)`
  color: ${palette('primary', 4)};

  &:hover {
    text-decoration: none;
  }
`;
