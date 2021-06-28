import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }


  render() {
    return(
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            onChange={ this.state.title }
          />
        </label>
        <label htmlFor="">
          Subtítulo
          <input
            type="text"
            name="subtitle"
          />
        </label>
        <label htmlFor="">
          Imagem
          <input
            type="text"
            name="imagePath"
          />
        </label>
        <label htmlFor="">
          Sinopse
          <textarea
            name="storyline"
          />
        </label>
        <label htmlFor="">
          Avaliação
          <input
            type="number"
            name="rating"
          />
        </label>
        <label htmlFor="">
          Gênero
          <input
            type="text"
            name="genre"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
