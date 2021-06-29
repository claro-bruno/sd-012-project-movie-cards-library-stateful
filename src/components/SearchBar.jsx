import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      /*  selectedGenre,
      onSelectedGenreChange, */
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="include-text"
          data-testid="text-input-label"
        >

          Inclui o texto:

          <input
            id="include-text"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />

        </label>

        <label
          htmlFor="show-favorites"
          data-testid="checkbox-input-label"
        >

          Mostrar somente favoritos

          <input
            id="show-favorites"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />

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
  /*  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired, */
};

export default SearchBar;
