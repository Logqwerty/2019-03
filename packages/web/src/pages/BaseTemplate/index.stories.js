import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { myInfo } from '@fixtures';
import BaseTemplate from '.';
import { setCookie } from '../../utils';

export default {
  title: 'components/templates/BaseTemplate',
  component: BaseTemplate,
  decorators: [withKnobs, StoryRouter()],
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
