// implement AddMovie component here
import React, { Component } from 'react';
import AddMovieInputs from './AddMovieInputs';
import AddMovieTextArea from './AddMovieTextArea';

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
        <AddMovieTextArea
          value={ storyline }
          onChange={ this.handleChange }
          name="storyline"
        />
      </form>
    );
  }
}
