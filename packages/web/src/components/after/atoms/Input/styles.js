import styled from 'styled-components';
import { palette } from 'styled-tools';

import { withPropHelper as withProp } from '@helpers';
import { DEFAULT_FONT_SIZE, DEFAULT_UNIT } from '../../../../constants';

const withUnit = withProp(['unit']);

export const StyledInput = styled.input`
  width: 100%;
  margin: 0;
  padding: ${withUnit((unit = DEFAULT_UNIT) => `${unit * 2}px ${unit * 2}px`)};
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
