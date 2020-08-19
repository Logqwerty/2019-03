import React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';

import Icon from '.';
import { ICON_TYPES } from '../../../../constants';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
  decorators: [withKnobs],
};

export const base = () => {
  const ratio = number('ratio', 6, {
    range: true,
    min: 1,
    max: 10,
    step: 0.25,
  });
  const type = select('type', ICON_TYPES, ICON_TYPES.logo);
  return <Icon type={type} ratio={ratio} />;
};
