import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ModalProvider } from '@contexts';
import rootReducer from '@reducer';
import { rawLikers } from '@fixtures';
import { withRedux } from '../../../../common';
import FollowButton from '.';

const postId = '1000';
const likers = {
  [postId]: rawLikers,
};

export default {
  title: 'components/molecules/FollowButton',
  component: FollowButton,
  decorators: [
    withKnobs,
    withRedux(rootReducer)({
      likers,
    }),
  ],
};

export const base = () => {
  return (
    <ModalProvider>
      <FollowButton
        userId={rawLikers[0].id}
        postId={postId}
        username={rawLikers[0].username}
        profileImage={rawLikers[0].profileImage}
        updateFollowing={action('update follow status!')}
      />
    </ModalProvider>
  );
};
