import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor=" " data-testid="title-input-label">
          <p>Título</p>
          <input
            type="text"
            data-testid="title-input"
          />
        </label>
        <label htmlFor=" " data-testid="subtitle-input-label">
          <p>Subtítulo</p>
          <input
            type="text"
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor=" " data-testid="image-input-label">
          <p>Imagem</p>
          <input
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor=" " data-testid="storyline-input-label">
          <p>Sinopse</p>
          <input
            type="textarea"
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor=" " data-testid="rating-input-label">
          <p>Avaliação</p>
          <input
            type="number"
            data-testid="rating-input"
            name="rating"
            value={ 0 }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
