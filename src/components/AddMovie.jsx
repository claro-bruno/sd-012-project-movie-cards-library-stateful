import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

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
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          id="movie-title-input"
          dataTestIdLabel="title-input-label"
          label="Título"
          value={ title }
          dataTestIdInput="title-input"
        />
        <Input
          id="movie-subtitle-input"
          dataTestIdLabel="subtitle-input-label"
          label="Subtítulo"
          value={ subtitle }
          dataTestIdInput="subtitle-input"
        />
        <Input
          id="movie-image-input"
          dataTestIdLabel="image-input-label"
          label="Imagem"
          value={ imagePath }
          dataTestIdInput="image-input"
        />
        <label htmlFor="movie-storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="movie-storyline-input"
            data-testid="storyline-input"
            value={ storyline }
          />
        </label>
        <Input
          id="movie-rating-input"
          dataTestIdLabel="rating-input-label"
          label="Avaliação"
          value={ rating }
          dataTestIdInput="rating-input"
        />
      </form>
    );
  }
}

export default AddMovie;
