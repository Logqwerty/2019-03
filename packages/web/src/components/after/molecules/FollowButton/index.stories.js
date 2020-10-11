import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { FOLLOW_STATUS } from '@const';
import { ModalProvider } from '@contexts';
import FollowButton from '.';

export default {
  title: 'components/molecules/FollowButton',
  component: FollowButton,
  decorators: [withKnobs],
};

export const base = () => {
  return (
    <ModalProvider>
      <FollowButton
        myId="1"
        userId="2"
        followStatus={FOLLOW_STATUS.none}
        username="tester"
        profileImage="https://picsum.photos/id/1003/1181/1772"
      />
    </ModalProvider>
  );
};
