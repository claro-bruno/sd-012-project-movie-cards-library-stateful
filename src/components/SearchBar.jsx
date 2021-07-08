// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testID="search-bar-form">
          <label htmlFor="text-input-label" data-testID="text-input-label">
            Inclui o texto
            <input
              id="text-input-label"
              type="text"
              name="searchText"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testID="text-input" />
          </label>
          <label htmlFor="checkbox-input" data-testID="checkbox-input-label">
            Favoritos
            <input
              type="checkbox"
              name="bookmarkedOnly"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="select-input" data-testID="select-input-label">
            Gênero
            <select
              name="selectedGenre"
              id="select-test-ID"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testID="select-input"
            >
              <option data-testID="select-option" value="">Todos</option>
              <option data-testID="select-option" value="action">Ação</option>
              <option data-testID="select-option" value="comedy">Comédia</option>
              <option data-testID="select-option" value="thriller">Suspense</option>
              <option data-testID="select-option" value="drama">Drama</option>
            </select>
          </label>
        </form>
      </div>
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
