import React from 'react';
import styled from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';

import Image from '.';

export default {
  title: 'components/atoms/Image',
  decorators: [withKnobs],
  component: Image,
};

const Wrapper = styled.div`
  width: 480px;
  height: 360px;
`;

export const base = () => {
  const src = text('src', 'https://picsum.photos/id/1003/1181/1772');
  const alt = text('alt', 'from Lorem Picsum');

  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};
