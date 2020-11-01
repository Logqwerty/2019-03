import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from '@atoms';
import { ModalProvider, useModalContext } from '@contexts';
import { rawLikers } from '@fixtures';
import rootReducer from '@reducer';
import { withRedux } from '../../../../common';
import FollowCancelModal from '.';

const postId = '1000';
const likers = {
  [postId]: rawLikers,
};

export default {
  title: 'components/molecules/FollowCancelModal',
  component: FollowCancelModal,
  decorators: [
    withKnobs,
    withRedux(rootReducer)({
      likers,
    }),
  ],
};

const FollowCancleModalExample = () => {
  const { isOpen, onCloseModal, onOpenModal } = useModalContext();
  const onCancelFollowing = onCloseModal;

  return (
    <>
      <Button onClick={onOpenModal}>모달 열기</Button>
      <FollowCancelModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        onCancelFollowing={onCancelFollowing}
        postId={postId}
        userId={rawLikers[0].id}
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
