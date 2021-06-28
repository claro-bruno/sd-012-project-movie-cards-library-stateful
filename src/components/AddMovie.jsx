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
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="movie-title-input">
          Título
          <input
            data-testid="title-input"
            id="movie-title-input"
            type="text"
            value={ title }
          />
        </label>
        <label htmlFor="movie-subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            id="movie-subtitle-input"
            value={ subtitle }
          />
        </label>
        <label htmlFor="movie-image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="movie-image-input"
            value={ imagePath }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="movie-storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="movie-storyline-input"
            data-testid="storyline-input"
            cols="30"
            rows="10"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
