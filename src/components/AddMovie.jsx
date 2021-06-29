import React from 'react';
import ImportTitle from './subComponents/importTitle';
import ImportSubtitle from './subComponents/ImportSubtitle';
import ImagePath from './subComponents/ImagePath';
import ImportRating from './subComponents/ImportRating';
import ImportGenre from './subComponents/ImportGenre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.submitMovie = this.submitMovie.bind(this);

    this.state = {
      importTitle: '',
      importSubtitle: '',
      importStoryline: '',
      imagePath: '',
      importGenre: '',
      importRating: 0,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  submitMovie(evt) {
    console.log(evt.target);
    this.setState({
      importTitle: '',
      importSubtitle: '',
      importStoryline: '',
      imagePath: '',
      importGenre: '',
      importRating: 0,
    });
  }

  render() {
    const { importTitle, importSubtitle } = this.state;
    const { imagePath, importRating } = this.state;
    const { importStoryline, importGenre } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ (e) => e.preventDefault() }>
        <ImportTitle
          importTitle={ importTitle }
          handleChange={ this.handleChange }
        />
        <ImportSubtitle
          importSubtitle={ importSubtitle }
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
            value={ importStoryline }
            id="importTextarea"
            onChange={ this.handleChange }
          />
        </label>
        <ImportRating
          importRating={ importRating }
          handleChange={ this.handleChange }
        />
        <ImportGenre
          importGenre={ importGenre }
          handleChange={ this.handleChange }
        />
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
