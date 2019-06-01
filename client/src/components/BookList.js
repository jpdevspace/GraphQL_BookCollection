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

const BookList = (props) => {
  const displayBooks = () => {
    const { data } = props;

    if (data.loading) {
      return (<h2>Loading books</h2>)
    } else {
      return data.books.map(book => (
        <li key={book.id}>{ book.name }</li>
      ));
    }
  }

  return (
    <div>
      <ul id="book-list">
          { displayBooks() }
      </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);