// implement AddMovie component here
import React, { Component } from 'react';
import AddMovieInputs from './AddMovieInputs';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddMovieInputs
          value={ title }
          name="title"
          onChange={ this.handleChange }
          inner="Título"
        />
      </form>
    );
  }
}
