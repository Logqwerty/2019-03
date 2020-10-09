import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { ModalProvider } from '@contexts';
import { profileImage as profileImageFixture } from '@fixtures';
import PostHead from '.';

export default {
  title: 'components/molecules/PostHead',
  component: PostHead,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  const writerName = text('writerName', 'writer1');
  const profileImage = text('profileImage', profileImageFixture);
  const postURL = text('postURL', 'aLsie28192');
  const isMine = boolean('isMine', false);

  return (
    <ModalProvider>
      <PostHead
        writerName={writerName}
        profileImage={profileImage}
        postURL={postURL}
        isMine={isMine}
      />
    </ModalProvider>
  );
};
