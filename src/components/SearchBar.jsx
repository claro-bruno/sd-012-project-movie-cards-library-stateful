import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="input-label"
        >
          Inclui o texto:
          <input
            type="text"
            id="input-label"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
};

export default SearchBar;
