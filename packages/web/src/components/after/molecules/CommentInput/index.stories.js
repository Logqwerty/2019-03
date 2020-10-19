import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CommentInput from '.';

export default {
  title: 'components/molecules/CommentInput',
  component: CommentInput,
  decorators: [withKnobs],
};

const myInfo = {
  id: '1000',
  username: '__sloth_92',
};

export const base = () => {
  return (
    <CommentInput
      setComments={action('setComments!')}
      myInfo={myInfo}
      postId="1"
      writerId="3"
    />
  );
};
