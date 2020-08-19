import React from 'react';
import PropTypes from 'prop-types';

import { Image } from '@atoms';
import { PROFILE_MAX_RATIO } from '@const';
import defaultProfileImage from './default_profile.png';
import { ProfileLink } from './styles';

const propTypes = {
  imgUrl: PropTypes.string,
  ratio: PropTypes.number,
};

const defaultProps = {
  ratio: PROFILE_MAX_RATIO,
};

const Profile = ({ ratio, imgUrl, className, ...linkProps }) => {
  return (
    <ProfileLink ratio={ratio} className={className} {...linkProps}>
      <Image src={imgUrl || defaultProfileImage} round />
    </ProfileLink>
  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
