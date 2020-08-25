import React from 'react';
import PropTypes from 'prop-types';

import defaultProfileImage from './default_profile.png';
import * as S from './styles';

import Image from '../../atoms/Image';
import Link from '../../atoms/Link';

const propTypes = {
  imgUrl: PropTypes.string,
  ratio: PropTypes.number,
};

const defaultProps = {
  ratio: 10,
};

const Profile = ({ ratio, imgUrl, ...linkProps }) => {
  return (
    <S.ProfileFlex
      align="center"
      verticalAlign="middle"
      ratio={ratio}
      {...linkProps}
    >
      <Link {...linkProps}>
        <Image src={imgUrl || defaultProfileImage} round />
      </Link>
    </S.ProfileFlex>
  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
