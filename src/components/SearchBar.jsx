import React from 'react';
import PropTypes from 'prop-types';
import SearchBarGenreSelect from './SearchBarGenreSelect';

export default function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;

  return (
    <form data-testid="search-bar-form">
      <label htmlFor="includes" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
      <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="bookmarkedOnly"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
      </label>
      <SearchBarGenreSelect
        selectedGenre={ selectedGenre }
        onChange={ onSelectedGenreChange }
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
