import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import { Flex } from '@atoms';
import { MODAL_MENU_POSITION } from '@const';
import ModalMenu from '.';

export default {
  title: 'components/atoms/ModalMenu',
  component: ModalMenu,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  const bold = boolean('bold', false);
  const danger = boolean('danger', false);
  const position = select(
    'position',
    MODAL_MENU_POSITION,
    MODAL_MENU_POSITION.top,
  );

  return (
    <Flex>
      <ModalMenu position={position} bold={bold} danger={danger}>
        기본 메뉴
      </ModalMenu>
      <ModalMenu to="/" position={position} bold={bold} danger={danger}>
        Link 메뉴
      </ModalMenu>
      <ModalMenu
        textToCopy="text to copy!"
        onClick={action('copied!')}
        position={position}
        bold={bold}
        danger={danger}
      >
        Copy 메뉴
      </ModalMenu>
    </Flex>
  );
};
