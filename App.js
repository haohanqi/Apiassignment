import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './nav/mainNav'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({
  uri:`https://graphql.anilist.co`
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <HomeStack/>
      </NavigationContainer>
    </ApolloProvider>
  );
}

