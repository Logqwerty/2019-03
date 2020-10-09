import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button } from '@atoms';
import { ModalProvider, useModalContext } from '@contexts';
import { profileImage as profileImageFixture } from '@fixtures';
import FollowCancelModal from '.';

export default {
  title: 'components/molecules/FollowCancelModal',
  component: FollowCancelModal,
  decorators: [withKnobs],
};

const FollowCancleModalExample = () => {
  const { isOpen, onCloseModal, onOpenModal } = useModalContext();

  const onCancelFollowing = onCloseModal;
  const username = text('username', 'tester');
  const profileImage = text('profileImage', profileImageFixture);

  return (
    <>
      <Button onClick={onOpenModal}>모달 열기</Button>
      <FollowCancelModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        onCancelFollowing={onCancelFollowing}
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
