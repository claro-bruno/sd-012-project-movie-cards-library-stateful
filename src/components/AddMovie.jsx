import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { importMovieTitle, importMovieSubtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="importMovieTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            name="importMovieTitle"
            value={ importMovieTitle }
            id="importMovieTitle"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="importMovieSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            name="importMovieSubtitle"
            value={ importMovieSubtitle }
            id="importMovieSubtitle"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="imagePath"
            value={ imagePath }
            id="imagePath"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="importTextarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="importTextarea"
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
