import React from 'react';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';

import Spinner from '.';
import {
  DEFAULT_SPINNER_SIZE,
  DEFAULT_SPINNER_WIDTH,
} from '../../../../constants';
import theme from '../../../../styles/theme';

export default {
  title: 'components/atoms/Spinner',
  component: Spinner,
  decorators: [withKnobs],
};

export const base = () => {
  const size = text('size', DEFAULT_SPINNER_SIZE);
  const width = text('width', DEFAULT_SPINNER_WIDTH);
  const foreColor = color('foreColor', theme.palette.primary[2]);
  const backColor = color('backColor', theme.palette.grayscale[1]);
  const reverse = boolean('reverse', false);

  return (
    <Spinner
      size={size}
      width={width}
      foreColor={foreColor}
      backColor={backColor}
      reverse={reverse}
    />
  );
};
