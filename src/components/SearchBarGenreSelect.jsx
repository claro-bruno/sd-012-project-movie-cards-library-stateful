import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBarGenreSelect(props) {
  const { selectedGenre, onChange } = props;

  return (
    <label htmlFor="selectedGenre" data-testid="select-input-label">
      Filtrar por gênero
      <select
        name="selectedGenre"
        id="selectedGenre"
        data-testid="select-input"
        value={ selectedGenre }
        onChange={ onChange }
      >
        <option data-testid="select-option" value="">Todos</option>
        <option data-testid="select-option" value="action">Ação</option>
        <option data-testid="select-option" value="comedy">Comédia</option>
        <option data-testid="select-option" value="thriller">Suspense</option>
      </select>
    </label>
  );
}

SearchBarGenreSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
