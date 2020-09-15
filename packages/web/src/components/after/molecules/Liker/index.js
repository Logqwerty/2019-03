import React from 'react';
import PropTypes from 'prop-types';

import { Profile, FollowButton } from '@molecules';
import { ModalProvider } from '../../../../contexts';
import { LikerFlex, LikerName } from './styles';

const propTypes = {
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  followStatus: PropTypes.number,
  myId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

const Liker = ({ username, profileImage, followStatus, myId, userId }) => {
  return (
    <LikerFlex verticalAlign="center">
      <Profile to={`/${username}`} ratio={12} imgUrl={profileImage} />
      <LikerName to={`/${username}`}>{username}</LikerName>
      <ModalProvider>
        <FollowButton
          followStatus={followStatus}
          profileImage={profileImage}
          username={username}
          myId={myId}
          userId={userId}
        />
      </ModalProvider>
    </LikerFlex>
  );
};

Liker.propTypes = propTypes;

export default Liker;
