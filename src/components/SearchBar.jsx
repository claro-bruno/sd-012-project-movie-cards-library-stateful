// implement SearchBar component here
import React, { Component } from 'react';
class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props
    return (
      <div>
        <h2> My awesome SearchBar </h2>
      </div>
    );
  }
}

export default SearchBar;
