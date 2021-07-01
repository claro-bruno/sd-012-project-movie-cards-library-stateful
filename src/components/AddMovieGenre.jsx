import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends Component {
  render() {
    const { onChangeGenre, genre } = this.props;
    return (
      <label
        htmlFor="genre-input-label"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ onChangeGenre }
        >
          <option
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

AddMovieGenre.propTypes = {
  onChangeGenre: PropTypes.func,
  genre: PropTypes.string,
}.isRequired;

export default AddMovieGenre;
