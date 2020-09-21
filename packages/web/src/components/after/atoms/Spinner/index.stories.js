import React from 'react';
import { withKnobs, text, color } from '@storybook/addon-knobs';

import Spinner from '.';
import {
  DEFAULT_SPINNER_SIZE,
  DEFAULT_SPINNER_WIDTH,
} from '../../../../constants';

export default {
  title: 'components/atoms/Spinner',
  component: Spinner,
  decorators: [withKnobs],
};

export const base = () => {
  const size = text('size', DEFAULT_SPINNER_SIZE);
  const width = text('width', DEFAULT_SPINNER_WIDTH);
  const spinnerColor = color('color');

  return <Spinner size={size} width={width} color={spinnerColor} />;
};
