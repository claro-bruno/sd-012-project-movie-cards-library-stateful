import React from 'react';
import PropTypes from 'prop-types';

export default function GenreSelect(props) {
  const { selectedGenre, onChange } = props;
  return (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        id="genre"
        data-testid="genre-input"
        value={ selectedGenre }
        onChange={ onChange }
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </label>
  );
}

GenreSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
