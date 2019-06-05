import React from 'react';
import { graphql } from 'react-apollo'; // view layer integration for React
import { getBooksQuery } from '../queries/queries';

const BookList = (props) => {
  const displayBooks = () => {
    const { data } = props;

    if (data.loading) {
      return (<h2>Loading books</h2>)
    } else {
      return data.books.map(book => (
        <li key={ book.id }>{ book.name }</li>
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