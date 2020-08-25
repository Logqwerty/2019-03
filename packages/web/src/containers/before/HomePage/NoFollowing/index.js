import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import UserListItem from '../../../../components/before/UserListModal/UserListItem';
import AnnouncementMessage from '../../../../components/before/AnnouncementMessage';
import Loading from '../../../../components/before/Loading';
import { ModalHeader } from '../../../../components/before/UserListModal/styles';
import {
  NoFollowingWrapper,
  StyledModalWrapper,
  StyledModalContent,
} from './styles';

import randomList from '../../../../queries/randomList';

function NoFollowing({ myId }) {
  const { data, error, loading } = useQuery(randomList);
  const getContent = userList => {
    const content = userList.map(user => {
      const updatedInfo = { ...user, isFollow: null };
      return (
        <UserListItem userInfo={updatedInfo} myId={myId} key={updatedInfo.id} />
      );
    });
    return content;
  };

  if (loading) return <Loading />;
  if (error)
    return (
      <AnnouncementMessage>
        다시 시도해주세요! 반복되면 관리자에게 문의해주세요!
      </AnnouncementMessage>
    );
  return (
    <NoFollowingWrapper>
      <AnnouncementMessage>아직 팔로우가 없어요!</AnnouncementMessage>
      <StyledModalWrapper>
        <ModalHeader>
          <h1>친구를 추가해서 함께 즐겨보아요!</h1>
        </ModalHeader>
        <StyledModalContent>{getContent(data.randomList)}</StyledModalContent>
      </StyledModalWrapper>
    </NoFollowingWrapper>
  );
}

export default NoFollowing;
