import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Overlay } from './styles';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const Modal = ({ isOpen, children }) => {
  return (
    isOpen && (
      <Overlay>
        <Wrapper>{children}</Wrapper>
      </Overlay>
    )
  );
};

Modal.propTypes = propTypes;

export default Modal;
