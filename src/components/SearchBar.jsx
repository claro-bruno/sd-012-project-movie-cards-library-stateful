// implement SearchBar component here
import React from 'react';
import { string, bool, func } from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form" action="">
        <label data-testid="text-input-label" htmlFor>
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            name="searchText"
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor>
          Mostrar somente favoritos
          <input
            type="checkbox"
            onChange={ onBookmarkedChange }
            name="bookmarkedOnly"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor>
          Filtrar por gênero
          <select
            value={ selectedGenre }
            name="selectedGenre"
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;
