import React from 'react';
import { gql } from 'apollo-boost'; // for parsing query string into a query doc
import { graphql } from 'react-apollo'; // view layer integration for React

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`

const BookList = () => {
  return (
    <div>
      <ul id="book-list">
          <li>Book Name</li>
      </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);