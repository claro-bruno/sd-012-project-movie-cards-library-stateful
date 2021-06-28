// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

console.log(PropTypes);
export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      //   bookmarkedOnly,
      //   onBookmarkedChange,
      //   selectedGenre,
      //   onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inputText">
          Inclui o texto:
          <input
            id="inputText"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
};
