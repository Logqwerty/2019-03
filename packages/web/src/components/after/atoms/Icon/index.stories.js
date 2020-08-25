import React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import { ICON_TYPES, ICON_MAX_RATIO } from '@const';
import Icon from '.';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
  decorators: [withKnobs],
};

export const base = () => {
  const ratio = number('ratio', 6, {
    range: true,
    min: 1,
    max: ICON_MAX_RATIO,
    step: 0.25,
  });
  const type = select('type', ICON_TYPES, ICON_TYPES.logo);
  return <Icon type={type} ratio={ratio} />;
};
