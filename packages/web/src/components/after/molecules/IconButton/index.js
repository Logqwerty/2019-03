import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const propTypes = {
  iconType: PropTypes.string.isRequired,
  ratio: PropTypes.number,
  onClick: PropTypes.func,
};

const defaultProps = {
  ratio: 6,
};

const IconButton = ({ iconType, ratio, onClick }) => {
  return (
    <Button type="button" onClick={onClick} transparent onlyContent>
      <Icon type={iconType} ratio={ratio} />
    </Button>
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
