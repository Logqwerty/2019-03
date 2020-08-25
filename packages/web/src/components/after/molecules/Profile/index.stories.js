import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Profile from '.';

export default {
  title: 'components/molecules/Profile',
  component: Profile,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  const imgUrl = text('imgUrl', '');
  const to = text('to', '/');
  const ratio = number('ratio', 10, {
    range: true,
    min: 1,
    max: 10,
    step: 0.25,
  });

  return <Profile to={to} ratio={ratio} imgUrl={imgUrl} />;
};
