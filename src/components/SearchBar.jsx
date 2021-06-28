import React from 'react';
import PropTypes from 'prop-types';

class searchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input-includes">
          Inclui o texto:
          <input type="text" id="input-includes" />
        </label>
        {searchText + onSearchTextChange + bookmarkedOnly
        + onBookmarkedChange + selectedGenre + onSelectedGenreChange}
      </form>);
  }
}

searchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default searchBar;
