import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchText from './SearchText';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange } = this.props;
      // bookmarkedOnly,
      // onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange
    return (
      <form data-testid="search-bar-form">
        <SearchText searchText={ searchText } onSearchTextChange={ onSearchTextChange } />
      </form>
    );
  }
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
