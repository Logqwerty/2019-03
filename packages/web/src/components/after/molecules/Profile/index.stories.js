import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { PROFILE_MAX_RATIO } from '@const';
import Profile from '.';

export default {
  title: 'components/molecules/Profile',
  component: Profile,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  const imgUrl = text('imgUrl', '');
  const to = text('to', '/');
  const ratio = number('ratio', PROFILE_MAX_RATIO, {
    range: true,
    min: 1,
    max: PROFILE_MAX_RATIO,
    step: 0.25,
  });

  return <Profile to={to} ratio={ratio} imgUrl={imgUrl} />;
};
