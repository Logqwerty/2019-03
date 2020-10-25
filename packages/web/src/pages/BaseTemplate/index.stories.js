import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import BaseTemplate from '.';

export default {
  title: 'components/templates/BaseTemplate',
  component: BaseTemplate,
  decorators: [withKnobs, StoryRouter()],
};

const myInfo = {
  id: '1000',
  username: '__sloth_92',
};

const setCookie = (name, value) => {
  const cookie = `${name}=${encodeURIComponent(value)}`;
  document.cookie = cookie;
};

export const base = () => {
  setCookie('myInfo', myInfo);
  return (
    <BaseTemplate>
      <h1>페이지 내용입니다.</h1>
      <h1>페이지 내용입니다.</h1>
      <h1>페이지 내용입니다.</h1>
      <h1>페이지 내용입니다.</h1>
      <h1>페이지 내용입니다.</h1>
      <h1>페이지 내용입니다.</h1>
    </BaseTemplate>
  );
};
