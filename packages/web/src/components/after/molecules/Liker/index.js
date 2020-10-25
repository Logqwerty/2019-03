import React from 'react';
import PropTypes from 'prop-types';

import { Profile, FollowButton } from '@molecules';
import { ModalProvider } from '../../../../contexts';
import { LikerFlex, LikerName } from './styles';

const propTypes = {
  liker: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
    isFollow: PropTypes.number.isRequired,
  }).isRequired,
  postId: PropTypes.string.isRequired,
  updateFollowing: PropTypes.func.isRequired,
};

const Liker = ({ liker, postId, updateFollowing }) => {
  const { id, username, profileImage } = liker;
  return (
    <LikerFlex>
      <Profile to={`/${username}`} ratio={12} imgUrl={profileImage} />
      <LikerName to={`/${username}`}>{username}</LikerName>
      <ModalProvider>
        <FollowButton
          userId={id}
          postId={postId}
          updateFollowing={updateFollowing}
        />
      </ModalProvider>
    </LikerFlex>
  );
};

Liker.propTypes = propTypes;

export default React.memo(Liker);
