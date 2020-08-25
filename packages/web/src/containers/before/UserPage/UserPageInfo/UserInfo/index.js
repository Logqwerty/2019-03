import React from 'react';

import StyledLink from '../../../../../components/before/StyledLink';
import Button from '../../../../../components/before/Button';
import UserNameLabel from './UserNameLabel';
import CountIndicator from './CountIndicator';
import Logout from './Logout';
import {
  UserInfoWrapper,
  UserInfoHeader,
  UserInfoBody,
  UserInfoFooter,
  StyledFollowButton,
  NameWrapper,
} from './styles';

const UserInfo = ({
  username,
  myId,
  data,
  isMyPage,
  onFollowCancel,
  onFollow,
  userProfileImage,
}) => {
  const btnStyle = 'light';
  let button = (
    <StyledFollowButton
      followStatus={data.isFollowing}
      username={username}
      myId={myId}
      userId={data.id}
      onFollowCancel={onFollowCancel}
      onFollow={onFollow}
      userProfileImage={userProfileImage}
    />
  );
  if (isMyPage)
    button = (
      <>
        <StyledLink to="/setting/edit/profile">
          <Button btnStyle={btnStyle}>개인정보 설정</Button>
        </StyledLink>
        <Logout />
      </>
    );
  return (
    <UserInfoWrapper>
      <UserInfoHeader>
        <UserNameLabel username={username} />
        {button}
      </UserInfoHeader>
      <UserInfoBody>
        <CountIndicator data={data} myId={myId} />
      </UserInfoBody>
      <UserInfoFooter>
        <NameWrapper>{data.name}</NameWrapper>
      </UserInfoFooter>
    </UserInfoWrapper>
  );
};

export default UserInfo;
