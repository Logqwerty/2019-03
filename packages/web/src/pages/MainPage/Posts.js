import React from 'react';
import { useErrorHandler } from 'react-error-boundary';

import { Post } from '@organisms';
import { ScrollableContainer } from '@molecules';
import { useMyInfoCookie } from '@hooks';
import { useFetchPosts, usePostHandlers } from './hooks';

const Posts = () => {
  const handleError = useErrorHandler();
  const myInfo = useMyInfoCookie();
  const { posts, loading, error } = useFetchPosts(myInfo);
  const { toggleHeart, addComment, deletePost } = usePostHandlers();

  if (error) return handleError(error);
  return (
    <ScrollableContainer isLoading={loading}>
      {posts.map(post => (
        <Post
          key={`__${post.id}__`}
          post={post}
          toggleHeart={toggleHeart}
          addComment={addComment}
          deletePost={deletePost}
        />
      ))}
    </ScrollableContainer>
  );
};

export default Posts;
