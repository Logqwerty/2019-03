import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import {
  HashTagInfoWrapper,
  PostCardListWrapper,
  HashTagDetailInfoWrapper,
  HashTagPageWrapper,
} from './styles';
import ProfileIcon from '../../../components/before/ProfileIcon';
import PostCardList from '../../../components/before/PostCardList';
import AnnouncementMessage from '../../../components/before/AnnouncementMessage';
import Loading from '../../../components/before/Loading';
import { HASHTAG_PAGE } from '../../../queries';

const HashTagPage = ({ match }) => {
  const { hashTag } = match.params;
  const loadingSize = 120;

  const { loading, error, data } = useQuery(HASHTAG_PAGE, {
    variables: { hashTagName: hashTag },
  });

  if (loading) return <Loading size={loadingSize} />;
  if (error)
    return <AnnouncementMessage>에러가 발생했습니다.</AnnouncementMessage>;
  if (!data.hashTagPage.isExistingHashTag)
    return (
      <AnnouncementMessage>존재하지않는 해쉬태그입니다.</AnnouncementMessage>
    );

  const { hashTagPage } = data;
  const { postCard } = hashTagPage;
  const isPostCardExisting = !!postCard[0];

  if (!isPostCardExisting)
    return (
      <AnnouncementMessage>
        #{hashTag}관련 게시물이 존재하지 않습니다.
      </AnnouncementMessage>
    );
  return (
    <HashTagPageWrapper>
      <HashTagInfoWrapper>
        <ProfileIcon imageURL={postCard[0].imageURL} ratio={47.5} />
        <HashTagDetailInfoWrapper>
          <h1>#{hashTag}</h1>
          <div>
            게시물<div>&nbsp;{postCard.length}</div>
          </div>
        </HashTagDetailInfoWrapper>
      </HashTagInfoWrapper>
      <PostCardListWrapper>
        <PostCardList data={hashTagPage} />
      </PostCardListWrapper>
    </HashTagPageWrapper>
  );
};

export default HashTagPage;
