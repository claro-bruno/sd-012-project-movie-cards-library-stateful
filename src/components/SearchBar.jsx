import React, { Component } from 'react';
import PropType from 'prop-types';

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
        <label htmlFor="inclui texto" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="inclui texto"
          />
        </label>
      </form>

    );
  }
}

SearchBar.propTypes = {
  searchText: PropType.string.isRequired,
  onSearchTextChange: PropType.func.isRequired,
  bookmarkedOnly: PropType.bool.isRequired,
  onBookmarkedChange: PropType.func.isRequired,
  selectedGenre: PropType.string.isRequired,
  onSelectedGenreChange: PropType.func.isRequired,
};

export default SearchBar;
