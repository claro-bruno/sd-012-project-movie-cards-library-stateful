// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text imput" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  // selectedGenre: PropTypes.string,
  // onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
  // selectedGenre: '',
  // onSelectedGenreChange: () => {},
};
