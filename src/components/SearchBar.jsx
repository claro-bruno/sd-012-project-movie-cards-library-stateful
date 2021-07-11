import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="textInput">
            Inclui o texto:
            <input
              id="textInput"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          <label data-testid="checkbox-input-label" htmlFor="checkboxInput">
            Mostrar somente favoritos
            <input
              id="checkboxInput"
              type="checkboxInput"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              />
            </label>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
};

export default SearchBar;
