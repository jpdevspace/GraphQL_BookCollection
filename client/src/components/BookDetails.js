import React from 'react';
import { graphql } from 'react-apollo'; // view layer integration for React
import { getBookQuery } from '../queries/queries';

const BookDetails = (props) => {
    const displayBookDetails = () => {
        const { data } = props;
        const { book } = data;

        if (data.loading) {
            return (<h2>Loading book's info</h2>)
        } else {
            if (book) {
                return (
                    <div>
                        <h2>{book.name}</h2>
                        <p>{book.genre}</p>
                        <p>{book.author.name}</p>
                        <p>All books by this author:</p>
                        <ul className="other-books">
                            {
                                book.author.books.map(item => (
                                    <li key={item.id}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            } else {
                return (
                    <div>No books available</div>
                )
            }
        }
    }

    return (
      <div id="book-details">
          { displayBookDetails() }
      </div>
    );
  }
  
  export default graphql(getBookQuery, {
    options: (props) => ({
        variables: {
            id: props.bookId
        }
    })
  })(BookDetails);