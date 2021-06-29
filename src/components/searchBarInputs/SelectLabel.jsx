import React from 'react';
import PropTypes from 'prop-types';

function SelectLabel({ selectedGenre, onSelectedGenreChange }) {
  return (
    <label data-testid="select-input-label" htmlFor="genre">
      Filtrar por gênero
      <select
        data-testid="select-input"
        id="genre"
        value={ selectedGenre }
        onChange={ onSelectedGenreChange }
      >
        <option value="" data-testid="select-option">Todos</option>
        <option value="action" data-testid="select-option">Ação</option>
        <option value="comedy" data-testid="select-option">Comédia</option>
        <option value="thriller" data-testid="select-option">Suspense</option>
      </select>
    </label>
  );
}

SelectLabel.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
export default SelectLabel;
