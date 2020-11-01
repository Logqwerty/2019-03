import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { composeWithDevTools } from 'redux-devtools-extension';

import { setCookie } from '../../utils';

export const withRedux = reducers => mockState => storyFn => {
  const store = createStore(
    reducers,
    mockState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  return <Provider store={store}>{storyFn()}</Provider>;
};

export const withCookies = (name, mockValue) => storyFn => {
  setCookie(name, mockValue);
  return <CookiesProvider>{storyFn()}</CookiesProvider>;
};
