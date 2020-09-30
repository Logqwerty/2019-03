import styled from 'styled-components';
import { prop, ifProp, palette } from 'styled-tools';

import {
  DEFAULT_SPINNER_SIZE,
  DEFAULT_SPINNER_WIDTH,
} from '../../../../constants';

const borderWidth = prop('width', DEFAULT_SPINNER_WIDTH);
const foreColor = ifProp(
  'reverse',
  prop('backColor', palette('grayscale', 1)),
  prop('foreColor', palette('primary', 2)),
);
const backColor = ifProp(
  'reverse',
  prop('foreColor', palette('primary', 2)),
  prop('backColor', palette('grayscale', 1)),
);

export const SpinnerWrapper = styled.div`
  width: ${prop('size', DEFAULT_SPINNER_SIZE)};
  height: ${prop('size', DEFAULT_SPINNER_SIZE)};
`;

export const SpinnerContent = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  border: ${borderWidth} solid ${backColor};
  border-top: ${borderWidth} solid ${foreColor};
  border-bottom: ${borderWidth} solid ${foreColor};
  border-left: ${borderWidth} solid ${foreColor};

  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(120deg);
    }
    80% {
      transform: rotate(240deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
