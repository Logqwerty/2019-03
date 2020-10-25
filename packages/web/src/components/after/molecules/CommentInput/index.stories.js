import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { myInfo, posts } from '@fixtures';
import { withRedux } from '../../../../common';
import CommentInput from '.';

export default {
  title: 'components/molecules/CommentInput',
  component: CommentInput,
  decorators: [
    withKnobs,
    withRedux(state => state)({
      MAIN: {
        posts,
      },
    }),
  ],
};

export const base = () => {
  return (
    <CommentInput
      addComment={action('add comment!')}
      myName={myInfo.username}
      myId={myInfo.id}
      postId={posts[0].id}
      writerId="3"
    />
  );
};
