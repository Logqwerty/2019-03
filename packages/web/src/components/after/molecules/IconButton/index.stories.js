import React from 'react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import IconButton from '.';
import { ICON_TYPES, ICON_MAX_RATIO } from '../../../../constants';

export default {
  title: 'components/molecules/IconButton',
  component: IconButton,
  decorators: [withKnobs],
};

export const base = () => {
  const iconType = select('iconType', ICON_TYPES, ICON_TYPES.fullHeart);
  const ratio = number('ratio', 6, {
    range: true,
    min: 1,
    max: ICON_MAX_RATIO,
    step: 0.25,
  });

  return (
    <IconButton
      iconType={iconType}
      ratio={ratio}
      onClick={action('IconButton Cliced')}
    />
  );
};
