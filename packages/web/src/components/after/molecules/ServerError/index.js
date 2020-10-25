import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@atoms';
import { ErrorFlex, FaviconIcon, ErrorMessage } from './styles';

const propTypes = {
  resetErrorBoundary: PropTypes.func,
};

const ServerError = ({ className, resetErrorBoundary }) => {
  return (
    <ErrorFlex className={className}>
      <FaviconIcon />
      <ErrorMessage>서버 오류!</ErrorMessage>
      <Button onClick={resetErrorBoundary}>재시도</Button>
    </ErrorFlex>
  );
};

ServerError.propTypes = propTypes;

export default ServerError;
