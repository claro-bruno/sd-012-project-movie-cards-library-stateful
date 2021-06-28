import React from 'react';
import ImportTitle from './subComponents/importTitle';
import ImportSubtitle from './subComponents/ImportSubtitle';
import ImagePath from './subComponents/ImagePath';
import ImportRating from './subComponents/ImportRating';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.submitMovie = this.submitMovie.bind(this);

    this.state = {
      // ImportTitle: '',
      // ImportSubtitle: '',
      // ImagePath: '',
      importRating: 0,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  submitMovie(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    const { importTitle, importMovieSubtitle } = this.state;
    const { imagePath, importRating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <ImportTitle
          importMovieTitle={ importTitle }
          handleChange={ this.handleChange }
        />
        <ImportSubtitle
          importMovieSubtitle={ importMovieSubtitle }
          handleChange={ this.handleChange }
        />
        <ImagePath
          imagePath={ imagePath }
          handleChange={ this.handleChange }

        />
        <label htmlFor="importTextarea" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="importStoryline"
            id="importTextarea"
            onChange={ this.handleChange }
          />
        </label>
        <ImportRating
          importRating={ importRating }
          handleChange={ this.handleChange }
        />
        <label htmlFor="importGenre" data-testid="genre-input-label">
          Gênero
          <select name="" id="importGenre" data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.submitMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
