import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
          />
        </label>
      </form>
    );
  }
}
