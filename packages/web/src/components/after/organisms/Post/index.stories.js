import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';

import { myInfo, posts } from '@fixtures';
import { ModalProvider } from '@contexts';
import rootReducer from '@reducer';
import { withRedux, withCookies } from '../../../../common';
import Post from '.';

export default {
  title: 'components/organisms/Post',
  component: Post,
  decorators: [
    withKnobs,
    StoryRouter(),
    withCookies('myInfo', myInfo),
    withRedux(rootReducer)({
      MAIN: {
        posts,
      },
    }),
  ],
};

export const base = () => {
  return (
    <ModalProvider>
      <Post
        post={posts[0]}
        toggleHeart={action('toggle heart!')}
        addComment={action('add comment!')}
        deletePost={action('delete post!')}
      />
    </ModalProvider>
  );
};
