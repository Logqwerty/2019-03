import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { createGlobalStyle } from 'styled-components';
import { CookiesProvider } from 'react-cookie';

import App from './containers/before/App';
import { apolloClient } from './common';

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
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <App />
      </ApolloProvider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
