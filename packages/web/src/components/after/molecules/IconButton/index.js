import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Button } from '@atoms';
import { BUTTON_TYPES } from '@const';

const propTypes = {
  iconType: PropTypes.string.isRequired,
  ratio: PropTypes.number,
  onClick: PropTypes.func,
};

const defaultProps = {
  ratio: 6,
};

const IconButton = ({ iconType, ratio, onClick, ...props }) => {
  return (
    <Button
      type={BUTTON_TYPES.button}
      onClick={onClick}
      transparent
      onlyContent
      {...props}
    >
      <Icon type={iconType} ratio={ratio} />
    </Button>
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default React.memo(IconButton);
