// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  renderText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto
        <input
          id="text-input"
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  /*  const {
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props; */
  render() {
    return (
      <div>
        <h2>Search Bar</h2>
        <form data-testid="search-bar-form">
          { this.renderText() }
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  //  bookmarkedOnly: PropTypes.bool.isRequired,
  //  onBookmarkedChange: PropTypes.func.isRequired,
  //  selectedGenre: PropTypes.string.isRequired,
  //  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
