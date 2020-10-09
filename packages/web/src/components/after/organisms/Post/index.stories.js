import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import { ModalProvider } from '../../../../contexts';
import Post from '.';

const myInfo = {
  id: '1000',
  username: '__sloth_92',
};

const post = {
  id: '1000',
  imageURL:
    'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/post/cat_0000.jpg',
  postURL: 'm8k81a',
  content: 'this is a test post.',
  isLike: true,
  updatedAt: '1597742671000',
  writer: {
    id: '100',
    username: '__sloth_92',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0000.jpg',
  },
  commentCount: 3,
  commentList: [
    {
      id: '1001',
      content: '#short This is a short text. ',
      writer: { username: 'commeter1' },
    },
    {
      id: '1002',
      content:
        '#long Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at eligendi beatae est repellat repellendus modi nihil adipisci maiores, autem, odit rem cupiditate ipsam suscipit numquam officiis minima! Provident, itaque?',
      writer: { username: 'commeter2' },
    },
  ],
  likerInfo: {
    likerCount: 1,
    username: 'liker1',
    profileImage: 'https://i.pravatar.cc/150?img=8',
  },
};

export default {
  title: 'components/organisms/Post',
  component: Post,
  decorators: [withKnobs, StoryRouter()],
};

export const base = () => {
  return (
    <ModalProvider>
      <Post post={post} myInfo={myInfo} />
    </ModalProvider>
  );
};
