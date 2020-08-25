import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from '.';

export default {
  title: 'components/atoms/Input',
  component: Input,
  decorators: [withKnobs],
};

export const base = () => {
  return (
    <Input
      type="text"
      name="name"
      placeholder="enter please..."
      onChange={action('input value changed!')}
    />
  );
};
