import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { DEFAULT_UNIT } from '@const';
import Input from '.';

export default {
  title: 'components/atoms/Input',
  component: Input,
  decorators: [withKnobs],
};

export const base = () => {
  const unit = number('unit', DEFAULT_UNIT);

  return (
    <Input
      type="text"
      name="name"
      placeholder="enter please..."
      onChange={action('input value changed!')}
      unit={unit}
    />
  );
};
