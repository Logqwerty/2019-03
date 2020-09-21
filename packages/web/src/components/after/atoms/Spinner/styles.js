import styled from 'styled-components';
import { prop, palette } from 'styled-tools';

import {
  DEFAULT_SPINNER_SIZE,
  DEFAULT_SPINNER_WIDTH,
} from '../../../../constants';

const borderWidth = prop('width', DEFAULT_SPINNER_WIDTH);
const borderColor = prop('color', palette('primary', 2));

export const SpinnerWrapper = styled.div`
  width: ${prop('size', DEFAULT_SPINNER_SIZE)};
  height: ${prop('size', DEFAULT_SPINNER_SIZE)};
`;

export const SpinnerContent = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  border: ${borderWidth} solid ${palette('grayscale', 1)};
  border-top: ${borderWidth} solid ${borderColor};
  border-bottom: ${borderWidth} solid ${borderColor};
  border-left: ${borderWidth} solid ${borderColor};

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
