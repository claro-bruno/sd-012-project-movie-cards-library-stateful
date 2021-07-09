import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { genre, updateState } = this.props;
    return (
      <label htmlFor="genreInput" data-testid="genre-input-label">
        Gênero
        <select
          id="genreInput"
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ updateState }
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
  genre: PropTypes.number,
  updateState: PropTypes.func,
}.isRequired;

export default GenreInput;
