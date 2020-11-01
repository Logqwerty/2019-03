import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { createGlobalStyle } from 'styled-components';
import { CookiesProvider } from 'react-cookie';
import { Provider as StoreProvier } from 'react-redux';

import App from './containers/before/App';
import { apolloClient } from './common';
import store from './store';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'NotoSansKR';
      font-weight: 300;
      src: local('NotoSansKR'), local('NotoSansKR'),
           url('./fonts/NotoSansKR-Light.otf') format('otf'), 
    }
    body {
        padding: 0;
        margin: 0 auto;
        background-color:#fafafa;
        font-family:'NotoSansKR'
    }
`;

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <StoreProvier store={store}>
        <ApolloProvider client={apolloClient}>
          <GlobalStyle />
          <App />
        </ApolloProvider>
      </StoreProvier>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
