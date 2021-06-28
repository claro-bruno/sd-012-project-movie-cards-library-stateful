import React from 'react';

class SearchBar extends React.Component {
  render() {
    // const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,  selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          <input id="text-input" type="text" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
