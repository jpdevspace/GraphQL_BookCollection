import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // view layer integration for React
import { getBooksQuery } from '../queries/queries';

// Components
import BookDetails from './BookDetails';

class BookList extends Component {
    state = {
        showDetails: false,
        selected: null
    }

    displayBooks = () => {
        const { data } = this.props;

        if (data.loading) {
            return (<h2>Loading books</h2>)
        } else {
            return data.books.map(book => (
                <li key={book.id} onClick={() => this.toggleDetails(book.id)}>{book.name}</li>
            ));
        }
    }

    toggleDetails = (bookId) => {
        if (bookId === this.state.selected) {
            this.setState({
                showDetails: !this.state.showDetails
            });
        } else {
            this.setState({
                showDetails: true,
                selected: bookId
            });
        }
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                {this.state.showDetails ? <BookDetails bookId={this.state.selected} /> : null}
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);