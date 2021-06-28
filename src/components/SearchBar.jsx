import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
