import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import BookList from './components/BookList'

// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <div id="main">
      <h1>Ninja's Reading List</h1>
      <BookList />
    </div>
  </ApolloProvider>
);


export default App;
