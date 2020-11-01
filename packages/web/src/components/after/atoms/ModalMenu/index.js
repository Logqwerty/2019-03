import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

import { MODAL_MENU_POSITION } from '@const';
import { StyledButton, StyledLink } from './styles';

const propTypes = {
  position: PropTypes.oneOf([
    MODAL_MENU_POSITION.top,
    MODAL_MENU_POSITION.middle,
    MODAL_MENU_POSITION.bottom,
  ]),
  danger: PropTypes.bool,
  bold: PropTypes.bool,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.object,
    }),
  ]),
  textToCopy: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  position: MODAL_MENU_POSITION.middle,
};

const ModalMenu = ({ position, to, textToCopy, onClick, ...props }) => {
  if (to) {
    return <StyledLink position={position} to={to} {...props} />;
  }

  if (textToCopy) {
    return (
      <CopyToClipboard text={textToCopy} onCopy={onClick}>
        <StyledButton position={position} {...props} />
      </CopyToClipboard>
    );
  }

  return <StyledButton position={position} onClick={onClick} {...props} />;
};

ModalMenu.propTypes = propTypes;
ModalMenu.defaultProps = defaultProps;

export default React.memo(ModalMenu);
