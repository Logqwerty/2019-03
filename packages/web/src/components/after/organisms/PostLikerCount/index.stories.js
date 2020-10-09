import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { ModalProvider } from '@contexts';
import PostLikerCount from '.';

export default {
  title: 'components/molecules/PostLikerCount',
  component: PostLikerCount,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  const likerCount = number('likerCount', 14);

  return (
    <ModalProvider>
      <PostLikerCount likerCount={likerCount} myId="1" postId="1" />
    </ModalProvider>
  );
};
