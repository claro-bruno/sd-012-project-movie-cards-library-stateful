import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="inputTag" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="inputTag"
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
}.isRequired;

SearchBar.defaultProps = {
  searchText: undefined,
  onSearchTextChange: undefined,
};
export default SearchBar;
