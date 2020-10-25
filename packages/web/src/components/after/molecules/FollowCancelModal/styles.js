import styled from 'styled-components';
import { palette } from 'styled-tools';

import { Flex, Modal, ModalMenu, Spinner } from '@atoms';
import { Profile } from '@molecules';
import { FLEX_ALIGN, FLEX_DIRECTION } from '@const';

export const StyledModal = styled(Modal)`
  width: 400px;
`;

export const StyledProfile = styled(Profile)`
  width: 90px;
  height: 90px;
  margin: 32px 32px 16px;
`;

export const CancelMessage = styled.span`
  font-size: 0.85rem;
  margin: 16px 16px 32px;
`;

export const ModalTopFlex = styled(Flex).attrs(() => ({
  direction: FLEX_DIRECTION.col,
  align: FLEX_ALIGN.center,
}))`
  width: 100%;
  border-bottom: 1px solid ${palette('border')};
`;

export const FollowCancelMenu = styled(ModalMenu).attrs(() => ({
  danger: true,
}))`
  font-weight: bold;
`;

export const InnerSpinner = styled(Spinner).attrs(() => ({
  width: '5px',
}))`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
