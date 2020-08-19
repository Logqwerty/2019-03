import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import Button from '.';
import {
  DEFAULT_FONT_WEIGHT,
  DEFAULT_FONT_SIZE,
  DEFAULT_UNIT,
} from '../../../../constants';

export default {
  title: 'components/atoms/Button',
  component: Button,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  const to = text('to', '');
  const href = text('href', '');
  const fontSize = number('fontSize', DEFAULT_FONT_SIZE);
  const fontWeight = number('fontWeight', DEFAULT_FONT_WEIGHT);
  const unit = number('unit', DEFAULT_UNIT);
  const content = text('content', 'Button');
  const disabled = boolean('disabled', false);
  const transparent = boolean('transparent', false);
  const onlyContent = boolean('onlyContent', false);

  return (
    <Button
      to={to}
      href={href}
      fontSize={fontSize}
      fontWeight={fontWeight}
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
