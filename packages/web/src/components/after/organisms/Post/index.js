import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Comment as MainComment } from '@molecules';
import { PostHead, PostLikerCount, PostComments } from '@organisms';
import { ModalProvider } from '@contexts';
import { useToggleHeart } from './hooks';
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
  }),
  myInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    profileImage: PropTypes.string,
  }),
};

const Post = ({ post, myInfo }) => {
  const [comments, setComments] = useState(post.commentList);
  const { heartType, likerCount, onClickHeartIcon } = useToggleHeart(
    post,
    myInfo,
  );
  const { id: postId, writer, imageURL, content, postURL, updatedAt } = post;
  const { id: writerId, username: writerName, profileImage } = writer;
  const { id: myId, username: myName } = myInfo;

  return (
    <PostFlex>
      <ModalProvider>
        <PostHead
          writerName={writerName}
          profileImage={profileImage}
          postURL={postURL}
          isMine={myName === writerName}
        />
      </ModalProvider>
      <PostImage src={imageURL} />
      <PostIconGroupFlex>
        <HeartIcon iconType={heartType} onClick={onClickHeartIcon} />
        <CommentIcon to={`/p/${postURL}`} />
      </PostIconGroupFlex>
      <PostBottomFlex>
        <ModalProvider>
          <PostLikerCount likerCount={likerCount} myId={myId} postId={postId} />
        </ModalProvider>
        <MainComment writer={writer} contents={content} />
        <PostComments postURL={postURL} comments={comments} />
      </PostBottomFlex>
      <TimePassedText updatedAt={updatedAt} />
      <CommentInput
        writerId={writerId}
        postId={postId}
        myInfo={myInfo}
        setComments={setComments}
      />
    </PostFlex>
  );
};

Post.propTypes = propTypes;

export default Post;
