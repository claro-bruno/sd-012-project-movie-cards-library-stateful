import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchText from './SearchText';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <SearchText searchText={ searchText } onSearchTextChange={ onSearchTextChange } />
        <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
          />
        </label>
        <label htmlFor="genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="selectedGenre"
            id="selectedGenre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            className="input"
          >
            <option data-testid="select-input" value="">Todos</option>
            <option data-testid="select-input" value="action">Ação</option>
            <option data-testid="select-input" value="comedy">Comédia</option>
            <option data-testid="select-input" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
