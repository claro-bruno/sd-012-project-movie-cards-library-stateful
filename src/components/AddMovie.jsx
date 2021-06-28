import React from 'react';
import ImportTitles from './subComponents/importTitle';

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
        <ImportTitles
          importMovieTitle={ importMovieTitle }
          handleChange={ this.handleChange }
        />
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
