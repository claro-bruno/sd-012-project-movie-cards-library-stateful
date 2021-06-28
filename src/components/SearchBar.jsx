// implement SearchBar component here
import React, { Component } from 'react';
class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return <form data-testid="search-bar-form" />;
  }
}

export default SearchBar;
