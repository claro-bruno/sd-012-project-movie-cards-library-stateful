import React from 'react';
import Form from './Form';

class SearchBar extends React.Component {
  render() {
    return (
      <div
      searchText=""
      onSearchTextChange={}
      bookmarkedOnly={}
      onBookmarkedChange={}
      selectedGenre=""
      onSelectedGenreChange={}
      >
        <Form data-testid="search-bar-form" />
      </div>
    );
  }
}

export default SearchBar;
