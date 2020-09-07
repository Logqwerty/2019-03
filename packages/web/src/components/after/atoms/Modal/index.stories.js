import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ModalMenu } from '@atoms';
import { MODAL_MENU_POSITION } from '@const';
import Modal from '.';

export default {
  title: 'components/atoms/Modal',
  component: Modal,
  decorators: [withKnobs],
};

export const base = () => {
  return (
    <Modal>
      <ModalMenu
        position={MODAL_MENU_POSITION.top}
        onClick={action('1번째 메뉴 클릭!')}
      >
        1번째 메뉴
      </ModalMenu>
      <ModalMenu onClick={action('2번째 메뉴 클릭!')}>2번째 메뉴</ModalMenu>
      <ModalMenu onClick={action('3번째 메뉴 클릭!')}>3번째 메뉴</ModalMenu>
      <ModalMenu
        position={MODAL_MENU_POSITION.bottom}
        onClick={action('취소!')}
        danger
        bold
      >
        취소
      </ModalMenu>
    </Modal>
  );
};
