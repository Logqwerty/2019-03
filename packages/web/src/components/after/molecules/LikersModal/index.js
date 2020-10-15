import React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';

import { Button } from '@atoms';
import { Liker, IconButton } from '@molecules';
import { ICON_TYPES } from '@const';
import { StyledModal, HeaderFlex, Title } from './styles';
import { withLikersData } from './hoc';

const propTypes = {
  myId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const Likers = withLikersData(({ myId, likers }) =>
  likers.map(({ id, username, profileImage, isFollow }) => (
    <Liker
      key={`_${username}_`}
      username={username}
      profileImage={profileImage}
      followStatus={isFollow}
      myId={myId}
      userId={id}
    />
  )),
);

const LikersModal = ({ myId, postId, isOpen, onCloseModal }) => {
  return (
    <StyledModal isOpen={isOpen} onCloseModal={onCloseModal}>
      <HeaderFlex>
        <Title>좋아요</Title>
        <IconButton
          iconType={ICON_TYPES.cancel}
          ratio={2}
          onClick={onCloseModal}
        />
      </HeaderFlex>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            <h2>서버 오류</h2>
            <Button onClick={resetErrorBoundary}>재시도</Button>
          </div>
        )}
        onReset={() => <Likers myId={myId} postId={postId} />}
      >
        <Likers myId={myId} postId={postId} />
      </ErrorBoundary>
    </StyledModal>
  );
};

LikersModal.propTypes = propTypes;

export default LikersModal;
