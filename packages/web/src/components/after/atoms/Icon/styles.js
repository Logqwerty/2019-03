import styled from 'styled-components';
import { prop, withProp } from 'styled-tools';

import icon from './icon.png';
import {
  ICON_LENGTH,
  ICON_TYPES,
  ICON_POSITIONS,
  ICON_IMAGE_LENGTH,
  ICON_LOGO_HEIGHT,
  ICON_LOGO_WIDTH,
  ICON_MAX_RATIO,
} from '../../../../constants';

const typeProp = prop('type');
const ratioProp = prop('ratio');
const bgSize = withProp(
  ratioProp,
  ratio => `${(ICON_IMAGE_LENGTH * ratio) / ICON_MAX_RATIO}px`,
);
const bgPosition = withProp([typeProp, ratioProp], (type, ratio) => {
  const { x, y } = ICON_POSITIONS[type];
  return `${(x * ratio) / ICON_MAX_RATIO}px ${(y * ratio) / ICON_MAX_RATIO}px`;
});
const width = withProp([typeProp, ratioProp], (type, ratio) => {
  const length = type === ICON_TYPES.logo ? ICON_LOGO_WIDTH : ICON_LENGTH;
  return `${(length * ratio) / ICON_MAX_RATIO}px`;
});
const height = withProp([typeProp, ratioProp], (type, ratio) => {
  const length = type === ICON_TYPES.logo ? ICON_LOGO_HEIGHT : ICON_LENGTH;
  return `${(length * ratio) / ICON_MAX_RATIO}px`;
});

export const Span = styled.span`
  display: inline-block;
  background-repeat: no-repeat;
  background-image: url(${icon});
  background-size: ${bgSize};
  background-position: ${bgPosition};
  width: ${width};
  height: ${height};
`;
