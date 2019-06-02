import React from 'react';
import { gql } from 'apollo-boost'; // for parsing query string into a query doc
import { graphql } from 'react-apollo'; // view layer integration for React

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

const AddBook = (props) => {
    const displayAuthors = () => {
        const { data } = props;

        if (data.loading) {
          return (<option disabled>Loading authors</option>)
        } else {
          return data.authors.map(author => (
            <option key={ author.id } value={ author.name }>{ author.name }</option>
          ));
        }
    }
    return (
        <form id="add-book">
            <div className="field">
                <label htmlFor="">Book Name:</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label htmlFor="">Genre:</label>
                <input type="text"/>
            </div>
            <div className="field">
                <label htmlFor="">Author:</label>
                <select>
                    <option value="">Select author</option>
                    { displayAuthors() }
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

export default graphql(getAuthorsQuery)(AddBook);