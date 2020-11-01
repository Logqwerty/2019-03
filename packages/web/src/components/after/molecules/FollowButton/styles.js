import styled, { css } from 'styled-components';
import { palette, ifProp } from 'styled-tools';

import { Button, Spinner } from '@atoms';
import { DEFAULT_FONT_SIZE } from '@const';

const loadingStyles = css`
  color: transparent;
  pointer-event: none;
`;

const followingStyles = css`
  border: 1px solid ${palette('border')};
  background-color: ${palette('white')}
  color: ${palette('black')};
`;

export const InnerSpinner = styled(Spinner).attrs(() => ({
  width: '3px',
  size: `${DEFAULT_FONT_SIZE}px`,
}))`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledButton = styled(Button)`
  position: relative;
  font-weight: bold;
  ${ifProp('isFollowing', followingStyles)};
  ${ifProp('isLoading', loadingStyles)};
`;
