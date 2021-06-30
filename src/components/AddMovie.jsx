// implement AddMovie component here
import React, { Component } from 'react';
import AddMovieTitle from './AddMovieTitle';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
    };
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <AddMovieTitle
          title={ title }
          onChangeTitle={ this.handleChange }
        />
        <label htmlFor="addMovieSubtitle">

        </label>
      </form>
    );
  }
}

export default AddMovie;
