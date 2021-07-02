import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreInput extends Component {
  render() {
    const { genre, method } = this.props;
    return (
      <label htmlFor="add-movie-genre" data-testid="genre-input-label">
        Gênero
        <select
          id="add-movie-genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ method }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};

export default GenreInput;
