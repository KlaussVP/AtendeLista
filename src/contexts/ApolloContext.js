import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

export default function ApolloLocalProvider({ children }) {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}