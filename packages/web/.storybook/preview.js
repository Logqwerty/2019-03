import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import theme from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

addDecorator(storyFn => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </ApolloProvider>
));
