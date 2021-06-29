import React from 'react';
import PropTypes from 'prop-types';
import TextLabel from './searchBarInputs/TextLabel';
import SelectLabel from './searchBarInputs/SelectLabel';
import CheckLabel from './searchBarInputs/CheckLabel';

function SearchBar({ searchText,
  onSearchTextChange, bookmarkedOnly,
  onBookmarkedChange, selectedGenre, onSelectedGenreChange }) {
  return (
    <form data-testid="search-bar-form">
      <TextLabel
        searchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
      />
      <SelectLabel
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      />
      <CheckLabel
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ onBookmarkedChange }
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

export default SearchBar;
