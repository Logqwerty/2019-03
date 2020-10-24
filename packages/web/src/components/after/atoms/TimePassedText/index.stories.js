import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import TimePassedText from '.';

export default {
  title: 'components/atoms/TimePassedText',
  component: TimePassedText,
  decorators: [withKnobs],
};

export const base = () => {
  const updatedAt = text('updatedAt', Date.now().toString());
  return <TimePassedText updatedAt={updatedAt} />;
};
