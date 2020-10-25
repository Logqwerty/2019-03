import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { myInfo } from '@fixtures';
import { withRedux, withCookies } from '../../common';
import rootReducer from '../../rootReducer';
import MainPage from '.';

export default {
  title: 'components/pages/MainPage',
  component: MainPage,
  decorators: [
    withKnobs,
    StoryRouter(),
    withCookies('myInfo', myInfo),
    withRedux(rootReducer)({
      MAIN: {
        posts: [],
        likers: {},
      },
    }),
  ],
};

export const base = () => {
  return <MainPage />;
};
