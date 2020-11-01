import React from 'react';
import PropTypes from 'prop-types';

import { Image } from '@atoms';
import { PROFILE_MAX_RATIO } from '@const';
import defaultProfileImage from './default_profile.png';
import { ProfileLink } from './styles';

const propTypes = {
  imgUrl: PropTypes.string,
  ratio: PropTypes.number,
  href: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.object,
    }),
  ]),
};

const defaultProps = {
  ratio: PROFILE_MAX_RATIO,
};

const Profile = ({ ratio, imgUrl, to, href, className }) => {
  const imgSrc = imgUrl || defaultProfileImage;
  if (!to && !href) return <Image src={imgSrc} className={className} round />;
  return (
    <ProfileLink to={to} href={href} ratio={ratio} className={className}>
      <Image src={imgSrc} round />
    </ProfileLink>
  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default React.memo(Profile);
