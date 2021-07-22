import React, { Component } from 'react';
import PropType from 'prop-types';
import SearchBar1 from './SearcBar1';
import SearchBar2 from './SearcBar2';

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
        <SearchBar1
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <SearchBar2
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
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
