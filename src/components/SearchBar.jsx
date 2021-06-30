import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="search-text"
            value={ searchText }
            onChange={ onSearchTextChange }
            id="search-text"
            data-testid="text-input"
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

export default SearchBar;
