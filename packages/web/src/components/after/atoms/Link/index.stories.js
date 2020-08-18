import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Link from '.';

export default {
  title: 'components/atoms/Link',
  component: Link,
  decorators: [withKnobs, StoryRouter()],
};

export const anchor = () => {
  const href = text('href', 'https://github.com/Logqwerty/2019-03');
  return <Link href={href}>Go to Github!</Link>;
};

export const navigation = () => {
  const to = text('to', '/');
  return <Link to={to}>Check the actions tab!</Link>;
};
