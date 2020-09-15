import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { Button } from '@atoms';
import PostModal from '.';
import { ModalProvider, useModalContext } from '../../../../contexts';

export default {
  title: 'components/molecules/PostModal',
  component: PostModal,
  decorators: [withKnobs, StoryRouter()],
};

const PostModalExample = () => {
  const { isOpen, onOpenModal, onCloseModal } = useModalContext();
  const isMine = boolean('isMine', false);
  const postURL = text('postURL', 'test_post_url');

  return (
    <div>
      <Button onClick={onOpenModal}>모달 열기</Button>
      <PostModal
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        isMine={isMine}
        postURL={postURL}
      />
      <p>
        <strong>게시물 삭제</strong>(isMine is true)를 누른 이후에는 버튼을
        눌러도 열리지 않습니다. <strong>새로고침</strong>을 하세요!
      </p>
    </div>
  );
};

export const base = () => {
  return (
    <ModalProvider>
      <PostModalExample />
    </ModalProvider>
  );
};
