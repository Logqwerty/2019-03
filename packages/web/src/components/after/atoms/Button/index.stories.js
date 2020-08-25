import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import { DEFAULT_UNIT, BUTTON_TYPES } from '@const';
import Button from '.';

export default {
  title: 'components/atoms/Button',
  component: Button,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  const to = text('to', '');
  const href = text('href', '');
  const type = select('type', BUTTON_TYPES, BUTTON_TYPES.button);
  const unit = number('unit', DEFAULT_UNIT);
  const content = text('content', 'Button');
  const disabled = boolean('disabled', false);
  const transparent = boolean('transparent', false);
  const onlyContent = boolean('onlyContent', false);

  return (
    <Button
      to={to}
      href={href}
      type={type}
      unit={unit}
      disabled={disabled}
      transparent={transparent}
      onlyContent={onlyContent}
      onClick={action('Button Clicked!')}
    >
      {content}
    </Button>
  );
};
