import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // view layer integration for React
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
    state = {
        name: '',
        genre: '',
        authorId: ''
    }

    displayAuthors = () => {
        const { data } = this.props;

        if (data.loading) {
          return (<option disabled>Loading authors</option>)
        } else {
          return data.authors.map(author => (
            <option key={ author.id } value={ author.name }>{ author.name }</option>
          ));
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form id="add-book">
                <div className="field">
                    <label htmlFor="name">Book Name:</label>
                    <input id="name" name="name" type="text" onChange={e => this.handleInputChange(e)}/>
                </div>
                <div className="field">
                    <label htmlFor="genre">Genre:</label>
                    <input id="genre" name="genre" type="text" onChange={e => this.handleInputChange(e)}/>
                </div>
                <div className="field">
                    <label htmlFor="authorId">Author:</label>
                    <select name="authorId" onChange={e => this.handleInputChange(e)}>
                        <option value="">Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);