import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Overlay } from './styles';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const Modal = ({ isOpen, onCloseModal, className, children }) => {
  const onClickWrapper = e => e.stopPropagation();
  return (
    isOpen && (
      <Overlay onClick={onCloseModal}>
        <Wrapper onClick={onClickWrapper} className={className}>
          {children}
        </Wrapper>
      </Overlay>
    )
  );
};

Modal.propTypes = propTypes;

export default Modal;
