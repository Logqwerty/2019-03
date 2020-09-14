import React from 'react';
import PropTypes from 'prop-types';

import { Profile, Comment, PostModal } from '@molecules';
import { useToggleHeart } from './hooks';
import { useModalContext } from '../../../../contexts';
import {
  PostFlex,
  PostTopFlex,
  PostIconGroupFlex,
  PostBottomFlex,
  Username,
  PostImage,
  EllipsisIcon,
  HeartIcon,
  CommentIcon,
  LikeInformation,
  ShowMoreComments,
  StyledCommentInput as CommentInput,
} from './styles';

const MainComment = Comment;

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
  const { isOpen, onOpenModal, onCloseModal } = useModalContext();
  const { heartType, likerCount, onClickHeartIcon } = useToggleHeart(
    post,
    myInfo,
  );
  const {
    writer,
    imageURL,
    content,
    postURL,
    commentCount,
    commentList,
  } = post;
  const { username: writerName, profileImage } = writer;
  const { username: myName } = myInfo;

  return (
    <PostFlex direction="column">
      <PostTopFlex verticalAlign="center">
        <Profile imgUrl={profileImage} ratio={10} />
        <Username to={`/${writerName}`}>{writerName}</Username>
        <EllipsisIcon onClick={onOpenModal} />
        <PostModal
          isOpen={isOpen}
          onCloseModal={onCloseModal}
          postURL={postURL}
          isMine={myName === writerName}
        />
      </PostTopFlex>
      <PostImage src={imageURL} />
      <PostIconGroupFlex>
        <HeartIcon iconType={heartType} onClick={onClickHeartIcon} />
        <CommentIcon to={`/p/${postURL}`} />
      </PostIconGroupFlex>
      <PostBottomFlex direction="column">
        {likerCount > 0 && (
          <LikeInformation>좋아요 {likerCount}개</LikeInformation>
        )}
        <MainComment writer={writer} contents={content} />
        {commentCount >= 3 && (
          <ShowMoreComments to={`/p/${postURL}`}>
            댓글 {commentCount}개 모두 보기
          </ShowMoreComments>
        )}
        {commentList.map(({ writer: commenter, content: commentContents }) => (
          <Comment
            key={commenter.username}
            writer={commenter}
            contents={commentContents}
          />
        ))}
      </PostBottomFlex>
      <CommentInput />
    </PostFlex>
  );
};

Post.propTypes = propTypes;

export default Post;
