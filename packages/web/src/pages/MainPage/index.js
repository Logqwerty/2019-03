import React from 'react';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';

import { ServerError } from '@molecules';
import BaseTemplate from '../BaseTemplate';
import Posts from './components/Posts';
import { PostsFlex } from './styles';
import { recoverPostsError } from './actions';

const MainPage = () => {
  const dispatch = useDispatch();

  return (
    <BaseTemplate>
      <PostsFlex>
        <ErrorBoundary
          FallbackComponent={ServerError}
          onReset={() => dispatch(recoverPostsError())}
        >
          <Posts />
        </ErrorBoundary>
      </PostsFlex>
    </BaseTemplate>
  );
};

export default MainPage;
