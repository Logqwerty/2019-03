import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@atoms';
import { ErrorFlex, FaviconIcon, ErrorMessage } from './styles';

const propTypes = {
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onRecover: PropTypes.func,
};

const defaultProps = {
  buttonText: '재시도',
};

const ServerError = ({ message, buttonText, onRecover }) => {
  return (
    <ErrorFlex>
      <FaviconIcon />
      <ErrorMessage>{message}</ErrorMessage>
      <Button onClick={onRecover}>{buttonText}</Button>
    </ErrorFlex>
  );
};

ServerError.propTypes = propTypes;
ServerError.defaultProps = defaultProps;

export default ServerError;
