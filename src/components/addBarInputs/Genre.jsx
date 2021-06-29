import React from 'react';
import PropTypes from 'prop-types';

function Genre({ genre, inputHandler }) {
  return (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        id="genre"
        data-testid="genre-input"
        value={ genre }
        onChange={ inputHandler }
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </label>
  );
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};
export default Genre;
