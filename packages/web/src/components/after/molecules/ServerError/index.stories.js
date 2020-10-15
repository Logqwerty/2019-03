import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import ServerError from '.';

export default {
  title: 'components/molecules/ServerError',
  component: ServerError,
  decorators: [withKnobs],
};

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid red;
`;

export const base = () => {
  return (
    <Wrapper>
      <ServerError message="서버 오류" />
    </Wrapper>
  );
};
