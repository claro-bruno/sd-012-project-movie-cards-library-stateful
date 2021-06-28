import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends Component {
  render() {
    const { handle, genre } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ handle }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieGenre.propTypes = {
  handle: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovieGenre;
