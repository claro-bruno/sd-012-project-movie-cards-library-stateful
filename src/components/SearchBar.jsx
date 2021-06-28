// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label>
          Search:
          <input type="text" name="" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
