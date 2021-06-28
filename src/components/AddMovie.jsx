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
    const image = imagePath;
    return (
      <form data-testid="add-movie-form">
        <AddMovieInputs
          id="title-input"
          value={ title }
          name="title"
          onChange={ this.handleChange }
          inner="Título"
        />
        <AddMovieInputs
          id="subtitle-input"
          value={ subtitle }
          name="subtitle"
          onChange={ this.handleChange }
          inner="Subtítulo"
        />
        <AddMovieInputs
          id="image-input"
          value={ imagePath }
          name="imagePath"
          onChange={ this.handleChange }
          inner="Imagem"
        />
      </form>
    );
  }
}
