import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import { action } from '@storybook/addon-actions';

import { Flex } from '@atoms';
import { FLEX_DIRECTION } from '@const';
import { rawLikers as manyLikers } from '@fixtures';
import rootReducer from '@reducer';
import { withRedux } from '../../../../common';
import Liker from '.';

const postId = '1000';
const likers = {
  [postId]: manyLikers.slice(0, 3),
};

export default {
  title: 'components/molecules/Liker',
  component: Liker,
  decorators: [
    withKnobs,
    StoryRouter(),
    withRedux(rootReducer)({
      likers,
    }),
  ],
};

export const base = () => {
  return (
    <Flex direction={FLEX_DIRECTION.col}>
      {manyLikers.slice(0, 3).map(liker => (
        <Liker
          key={`_${liker.id}_`}
          liker={liker}
          postId={postId}
          updateFollowing={action('update liker following!')}
        />
      ))}
    </Flex>
  );
};
