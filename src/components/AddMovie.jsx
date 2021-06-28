import React from 'react';
import ImportTitle from './subComponents/importTitle';
import ImportSubtitle from './subComponents/ImportSubtitle';
import ImagePath from './subComponents/ImagePath';
import ImportRating from './subComponents/ImportRating';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      importRating: 0,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { importMovieTitle, importMovieSubtitle } = this.state;
    const { imagePath, importRating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <ImportTitle
          importMovieTitle={ importMovieTitle }
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

      </form>
    );
  }
}

export default AddMovie;
