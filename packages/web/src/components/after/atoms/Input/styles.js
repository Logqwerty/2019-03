import styled from 'styled-components';
import { prop, palette, withProp } from 'styled-tools';

import { DEFAULT_FONT_SIZE, DEFAULT_UNIT } from '../../../../constants';

const withUnit = fn => withProp(prop('unit', DEFAULT_UNIT), fn);

export const StyledInput = styled.input`
  width: 100%;
  margin: 0;
  padding: ${withUnit(unit => `${unit * 2}px ${unit * 2}px`)};
  border: 1px solid ${palette('border')};
  box-sizing: border-box;

  font-size: ${DEFAULT_FONT_SIZE};
  font-height: 1.5;

  color: ${palette('black')};
  background-color: ${palette('white')};

  &:focus {
    outline: none;
  }
`;
