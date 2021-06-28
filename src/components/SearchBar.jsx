import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onselectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">

      </form>
    )
  }
}

export default SearchBar;