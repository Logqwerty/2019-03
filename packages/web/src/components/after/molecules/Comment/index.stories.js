import React from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Comment from '.';

export default {
  title: 'components/molecules/Comment',
  component: Comment,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  const writer = object('writer', {
    id: '100',
    username: '__sloth_92',
    profileImage: 'https://i.pravatar.cc/150?img=1',
  });
  const contents = text(
    'contents',
    '@Lorem #ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis deserunt provident sequi rem eius quis laudantium iusto velit nam? Nobis ducimus officia inventore optio incidunt, deserunt voluptatibus nostrum dolorem!',
  );

  return <Comment writer={writer} contents={contents} />;
};
