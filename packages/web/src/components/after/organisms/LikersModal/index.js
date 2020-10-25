import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch } from 'react-redux';

import { IconButton, ServerError } from '@molecules';
import { ICON_TYPES } from '@const';

import { StyledModal, HeaderFlex, Title } from './styles';
import { recoverLikersError, resetLikers } from './actions';
import Likers from './Likers';

const propTypes = {
  myId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const LikersModal = ({ myId, postId, isOpen, onCloseModal }) => {
  const dispatch = useDispatch();
  const onReset = useCallback(() => dispatch(recoverLikersError()), [dispatch]);

  const onCloseModalWithClear = () => {
    dispatch(resetLikers(postId));
    onCloseModal();
  };

  return (
    <StyledModal isOpen={isOpen} onCloseModal={onCloseModalWithClear}>
      <HeaderFlex>
        <Title>좋아요</Title>
        <IconButton
          iconType={ICON_TYPES.cancel}
          ratio={2}
          onClick={onCloseModal}
        />
      </HeaderFlex>
      <ErrorBoundary FallbackComponent={ServerError} onReset={onReset}>
        <Likers myId={myId} postId={postId} />
      </ErrorBoundary>
    </StyledModal>
  );
};

LikersModal.propTypes = propTypes;

export default LikersModal;
