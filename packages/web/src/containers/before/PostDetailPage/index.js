import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { withCookies } from 'react-cookie';

import { PostDetailPageWrapper, PostImageWrapper } from './styles';
import PostSideBox from './PostSideBox';
import { READ_POST } from '../../../queries';
import PostImage from '../../../components/before/PostImage';
import Loading from '../../../components/before/Loading';
import Error from '../../../components/before/Error';

function PostDetailPage({ match, cookies }) {
  const myInfo = cookies.get('myInfo');
  const { loading, error, data } = useQuery(READ_POST, {
    variables: { postURL: match.params.postURL, UserId: myInfo.id },
    fetchPolicy: 'first',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Loading size={50} />;
  if (error) return <Error status={500} />;
  if (!data) return null;
  const { post } = data;
  if (!post) return <Error status={404} />;

  return (
    <PostDetailPageWrapper>
      <PostImageWrapper>
        <PostImage imageURL={post.imageURL} />
      </PostImageWrapper>
      <PostSideBox post={post} />
    </PostDetailPageWrapper>
  );
}

export default withCookies(PostDetailPage);
