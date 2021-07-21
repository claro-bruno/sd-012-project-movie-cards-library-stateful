import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      // bookmarkedOnly,
      // onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">

          <label data-testid="text-input-label" htmlFor="Inclui o texto:">
            Inclui o texto:
            <input
              data-testid="text-input"
              name="imputTest"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>

        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  // onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};
