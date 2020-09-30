import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { Flex } from '@atoms';
import { FLEX_DIRECTION } from '@const';
import { likers as manyLikers } from '@fixtures';
import Liker from '.';

export default {
  title: 'components/molecules/Liker',
  component: Liker,
  decorators: [withKnobs, StoryRouter()],
};

const likers = manyLikers.slice(0, 3);

export const base = () => {
  return (
    <Flex direction={FLEX_DIRECTION.col}>
      {likers.map(({ username, profileImage, followStatus, myId, userId }) => (
        <Liker
          key={`_${username}_`}
          username={username}
          profileImage={profileImage}
          followStatus={followStatus}
          myId={myId}
          userId={userId}
        />
      ))}
    </Flex>
  );
};
