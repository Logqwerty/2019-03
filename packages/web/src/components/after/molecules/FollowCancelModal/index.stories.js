import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button } from '@atoms';
import FollowCancelModal from '.';
import { ModalProvider, useModalContext } from '../../../../contexts';

export default {
  title: 'components/molecules/FollowCancelModal',
  component: FollowCancelModal,
  decorators: [withKnobs],
};

const FollowCancleModalExample = () => {
  const { isOpen, onCloseModal, onOpenModal } = useModalContext();

  const onCancelFollow = onCloseModal;
  const username = text('username', 'tester');
  const profileImage = text(
    'profileImage',
    'https://picsum.photos/id/1003/1181/1772',
  );

  return (
    <>
      <Button onClick={onOpenModal}>모달 열기</Button>
      <FollowCancelModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        onCancelFollow={onCancelFollow}
        username={username}
        profileImage={profileImage}
      />
    </>
  );
};

export const base = () => {
  return (
    <ModalProvider>
      <FollowCancleModalExample />
    </ModalProvider>
  );
};
