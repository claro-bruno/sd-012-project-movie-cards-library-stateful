import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input data-testid="title-input" id="title-input" />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input data-testid="subtitle-input" id="subtitle-input" />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input data-testid="image-input" id="image-input" />
        </label>
        <label data-testid="storyline-input-label" htmlFor="textarea-input">
          Sinopse
          <textarea data-testid="storyline-input" id="textarea-input" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
