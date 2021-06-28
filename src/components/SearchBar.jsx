import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form" />
      </div>

    );
  }
}

SearchBar.propTypes = {
  searchBarProps: PropTypes.shape({
    searchText: PropTypes.string,
    selectedGenre: PropTypes.string,
    bookmarkedOnly: PropTypes.bool,
    onSearchTextChange: PropTypes.func,
    onBookmarkedChange: PropTypes.func,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};
