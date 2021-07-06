// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { movieTitle, movieSubtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="movie-title" data-testid="title-input-label">
          Título
          <input
            id="movieTitle"
            data-testid="title-input"
            type="text"
            value={ movieTitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="movieSubtitle"
            data-testid="subtitle-input"
            type="text"
            value={ movieSubtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image-path" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyLine-movie" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyLine"
            data-testid="storyline-input"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
