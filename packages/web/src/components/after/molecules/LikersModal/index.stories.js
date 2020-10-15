import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { Button } from '@atoms';
import { ModalProvider, useModalContext } from '@contexts';
import LikersModal from '.';

export default {
  title: 'components/molecules/LikersModal',
  component: LikersModal,
  decorators: [withKnobs, StoryRouter()],
};

const LikersModalExample = () => {
  const { isOpen, onOpenModal, onCloseModal } = useModalContext();

  return (
    <>
      <Button onClick={onOpenModal}>모달 열기</Button>
      {isOpen && (
        <LikersModal
          onCloseModal={onCloseModal}
          isOpen={isOpen}
          myId="1"
          postId="1"
        />
      )}
    </>
  );
};

export const base = () => {
  return (
    <ModalProvider>
      <LikersModalExample />
    </ModalProvider>
  );
};
