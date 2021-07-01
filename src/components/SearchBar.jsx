import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { string } from 'yargs';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        SearchBar
      </div>
    );
  }
}

SearchBar.propTypes = {
searchText: PropTypes.string.isRequired,
onSearchTextChange: PropTypes.func.isRequired,
bookmarkedOnly: PropTypes.bool.isRequired,
selectedGenre: PropTypes.string.isRequired,
onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
