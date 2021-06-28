// implement SearchBar component here
import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';

// import MovieList from './MovieList';
// import AddMovie from './AddMovie';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="search-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <br />
        <label htmlFor="booksmark-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="booksmark-checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <br />
        <label htmlFor="genreOption" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="genreOption"
            value={ selectedGenre }
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
