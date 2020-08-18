import React from 'react';
import styled from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';

import Flex from '.';

export default {
  title: 'components/atoms/Flex',
  component: Flex,
  decorators: [withKnobs],
};

const Box = styled.div`
  width: ${({ width = 50 }) => `${width}px`};
  height: ${({ height = 100 }) => `${height}px`};
  background-color: black;
  border: 1px solid white;
`;

export const base = () => {
  const style = {
    border: '1px solid red',
    width: '300px',
    height: '300px',
  };
  const direction = select(
    'direction',
    {
      row: 'row',
      column: 'column',
    },
    'row',
  );
  const align = select(
    'align',
    {
      start: 'start',
      center: 'center',
      end: 'end',
    },
    'start',
  );
  const verticalAlign = select(
    'verticalAlign',
    {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom',
    },
    'top',
  );

  return (
    <Flex
      direction={direction}
      align={align}
      verticalAlign={verticalAlign}
      style={style}
    >
      <Box />
      <Box height={50} />
      <Box height={70} />
    </Flex>
  );
};
