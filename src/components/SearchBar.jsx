// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render () {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <h2>Search Bar</h2>
      </div>
    );
  }
}

SearchBar.PropTypes = {
searchText: PropTypes.string.isRequired,
onSearchTextChange: PropTypes.func.isRequired,
bookmarkedOnly: PropTypes.bool.isRequired,
onBookmarkedChange: PropTypes.func.isRequired,
selectedGenre: PropTypes.string.isRequired,
onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
