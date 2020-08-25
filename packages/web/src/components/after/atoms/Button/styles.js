import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { palette, withProp, ifProp, prop } from 'styled-tools';

import {
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_WEIGHT,
  DEFAULT_UNIT,
} from '../../../../constants';

const withUnit = fn => withProp(prop('unit', DEFAULT_UNIT), fn);
const withDisabledAndTransparent = fn =>
  withProp([prop('disabled'), prop('transparent')], fn);

const bgColor = withDisabledAndTransparent((disabled, transparent) =>
  transparent ? 'transparent' : palette('primary', disabled ? 0 : 2),
);
const color = withDisabledAndTransparent((disabled, transparent) => {
  if (transparent) return palette('primary', disabled ? 0 : 2);
  return disabled ? palette('grayscale', 2) : palette('white');
});
const borderColor = withDisabledAndTransparent(disabled =>
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
    withUnit(unit => `${unit * 2}px`),
  )};
  padding-left: ${ifProp(
    'onlyContent',
    '0px',
    withUnit(unit => `${unit * 4}px`),
  )};
  padding-right: ${ifProp(
    'onlyContent',
    '0px',
    withUnit(unit => `${unit * 4}px`),
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
