import styled from 'styled-components';
import { palette } from 'styled-tools';

import { Flex, Modal, Spinner } from '@atoms';
import { FLEX_ALIGN } from '@const';

export const StyledModal = styled(Modal)`
  width: 400px;
  max-height: 400px;
`;

export const HeaderFlex = styled(Flex).attrs(() => ({
  align: FLEX_ALIGN.flexEnd,
  verticalAlign: FLEX_ALIGN.center,
}))`
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid ${palette('border')};
`;

export const ScrollableContainer = styled.div`
  width: 100%;
  min-height: 0px; // for firefox
  overflow: hidden auto;
`;

export const SpinnerWapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;

export const InnerSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.strong`
  margin: auto;
  font-size: 1rem;
`;
