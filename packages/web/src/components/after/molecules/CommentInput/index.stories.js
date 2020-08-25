import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CommentInput from '.';

export default {
  title: 'components/molecules/CommentInput',
  component: CommentInput,
  decorators: [withKnobs],
};

export const base = () => {
  const submitDisabled = boolean('submitDisabled', false);

  return (
    <CommentInput
      submitDisabled={submitDisabled}
      onChange={action('CommentInput value changed!')}
    />
  );
};
