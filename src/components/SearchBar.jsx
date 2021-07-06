// implement SearchBar component here
import React from 'react';
//import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-lebel">
          Inclui o texto
          <input
            type="text"
            data-testid="text-input"
            name="search-bar"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="text-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            name="favorite-only"
            value={ bookmarkedOnly }
            onChange={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="filter" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="filter"
            value={ slectedGenre }
            onChange={ onSelectedGenderChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

// SearchBar.propTypes = {
//   searchText: PropTypes.string.isRequired,
//   onSearchTextChange: PropTypes.func.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   onBookmarkedChange: PropTypes.func.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.func.isRequired,
// };

export default SearchBar;
