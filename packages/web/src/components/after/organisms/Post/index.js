import React from 'react';
import PropTypes from 'prop-types';

import { Comment as MainComment } from '@molecules';
import { PostHead, PostLikerCount, PostComments } from '@organisms';
import { ModalProvider } from '@contexts';
import { useMyInfoCookie } from '@hooks';
import { usePostLike, useComments } from './hooks';
import {
  PostFlex,
  PostIconGroupFlex,
  PostBottomFlex,
  PostImage,
  HeartIcon,
  CommentIcon,
  StyledCommentInput as CommentInput,
  StyledTimePassedText as TimePassedText,
} from './styles';

const propTypes = {
  toggleHeart: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    imageURL: PropTypes.string,
    postURL: PropTypes.string,
    content: PropTypes.string,
    isLike: PropTypes.bool,
    updatedAt: PropTypes.string,
    writer: PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      profileImage: PropTypes.string,
    }),
    likerInfo: PropTypes.shape({
      likerCount: PropTypes.number,
      username: PropTypes.string,
      profileImage: PropTypes.string,
    }),
    commentCount: PropTypes.number,
    commentList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        content: PropTypes.string,
        writer: PropTypes.shape({
          username: PropTypes.string,
        }),
      }),
    ),
  }).isRequired,
};

const Post = ({ post, toggleHeart, addComment, deletePost }) => {
  const { id: postId, writer, imageURL, content, postURL, updatedAt } = post;
  const { id: writerId } = writer;
  const { id: myId, username: myName } = useMyInfoCookie();
  const { comments, commentCount } = useComments(postId);
  const { heartType, likerCount, onClickHeart } = usePostLike({
    myId,
    postId,
    writerId,
    toggleHeart,
  });

  return (
    <PostFlex>
      <ModalProvider>
        <PostHead postId={postId} deletePost={deletePost} />
      </ModalProvider>
      <PostImage src={imageURL} />
      <PostIconGroupFlex>
        <HeartIcon iconType={heartType} onClick={onClickHeart} />
        <CommentIcon to={`/p/${postURL}`} />
      </PostIconGroupFlex>
      <PostBottomFlex>
        <ModalProvider>
          <PostLikerCount likerCount={likerCount} myId={myId} postId={postId} />
        </ModalProvider>
        <MainComment writer={writer} contents={content} />
        <PostComments
          postURL={postURL}
          commentCount={commentCount}
          comments={comments}
        />
      </PostBottomFlex>
      <TimePassedText updatedAt={updatedAt} />
      <CommentInput
        addComment={addComment}
        myId={myId}
        myName={myName}
        writerId={writerId}
        postId={postId}
      />
    </PostFlex>
  );
};

Post.propTypes = propTypes;

export default React.memo(Post);
