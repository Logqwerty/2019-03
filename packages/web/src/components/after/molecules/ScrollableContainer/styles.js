import styled from 'styled-components';

import { Spinner } from '@atoms';

export const StyledDiv = styled.div`
  width: 100%;
  min-height: 0px; // for firefox
  overflow: hidden auto;
`;

export const SpinnerWapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 50px;
  height: 50px;
`;

export const InnerSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
