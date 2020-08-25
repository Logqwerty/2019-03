import styled from 'styled-components';

import { withPropHelper as withProp } from '@helpers';
import {
  ICON_LENGTH,
  ICON_TYPES,
  ICON_POSITIONS,
  ICON_IMAGE_LENGTH,
  ICON_LOGO_HEIGHT,
  ICON_LOGO_WIDTH,
  ICON_MAX_RATIO,
} from '@const';
import icon from './icon.png';

const withIconProps = withProp(['type', 'ratio']);

const bgSize = withIconProps(
  (_, ratio) => `${(ICON_IMAGE_LENGTH * ratio) / ICON_MAX_RATIO}px`,
);
const bgPosition = withIconProps((type, ratio) => {
  const { x, y } = ICON_POSITIONS[type];
  return `${(x * ratio) / ICON_MAX_RATIO}px ${(y * ratio) / ICON_MAX_RATIO}px`;
});
const width = withIconProps((type, ratio) => {
  const length = type === ICON_TYPES.logo ? ICON_LOGO_WIDTH : ICON_LENGTH;
  return `${(length * ratio) / ICON_MAX_RATIO}px`;
});
const height = withIconProps((type, ratio) => {
  const length = type === ICON_TYPES.logo ? ICON_LOGO_HEIGHT : ICON_LENGTH;
  return `${(length * ratio) / ICON_MAX_RATIO}px`;
});

export const StyledSpan = styled.span`
  display: inline-block;
  background-repeat: no-repeat;
  background-image: url(${icon});
  background-size: ${bgSize};
  background-position: ${bgPosition};
  width: ${width};
  height: ${height};
`;
