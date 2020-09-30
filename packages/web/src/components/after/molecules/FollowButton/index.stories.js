import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import FollowButton from '.';
import { ModalProvider } from '../../../../contexts';

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
        followStatus={null}
        username="tester"
        profileImage="https://picsum.photos/id/1003/1181/1772"
      />
    </ModalProvider>
  );
};
