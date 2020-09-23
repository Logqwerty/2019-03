import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette, ifProp } from 'styled-tools';

import { withPropHelper as withProp } from '@helpers';
import {
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_UNIT,
} from '../../../../constants';

const withButtonProps = withProp(['disabled', 'transparent', 'unit']);

const bgColor = withButtonProps((disabled, transparent) =>
  transparent ? 'transparent' : palette('primary', disabled ? 0 : 2),
);
const color = withButtonProps((disabled, transparent) => {
  if (transparent) return palette('primary', disabled ? 0 : 2);
  return disabled ? palette('grayscale', 2) : palette('white');
});
const borderColor = withButtonProps(disabled =>
  palette('primary', disabled ? 0 : 2),
);

const styles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  border-radius: 3px;
  border-width: ${ifProp('onlyContent', '0px', '1px')};
  border-style: solid;
  padding: ${ifProp(
    'onlyContent',
    '0px',
    withButtonProps((_, __, unit = DEFAULT_UNIT) => `${unit * 2}px`),
  )};
  padding-left: ${ifProp(
    'onlyContent',
    '0px',
    withButtonProps((_, __, unit = DEFAULT_UNIT) => `${unit * 4}px`),
  )};
  padding-right: ${ifProp(
    'onlyContent',
    '0px',
    withButtonProps((_, __, unit = DEFAULT_UNIT) => `${unit * 4}px`),
  )};

  text-decoration: none;
  appearance: none;
  font-size: ${DEFAULT_FONT_SIZE}px;
  font-weight: ${DEFAULT_FONT_WEIGHT}px;

  cursor: ${ifProp('disabled', 'default', 'pointer')};
  pointer-events: ${ifProp('disabled', 'none', 'auto')};

  background-color: ${bgColor};
  border-color: ${borderColor};
  color: ${color};

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  ${styles}
`;

export const StyledLink = styled(Link)`
  ${styles}
`;

export const StyledAnchor = styled.a`
  ${styles}
`;
