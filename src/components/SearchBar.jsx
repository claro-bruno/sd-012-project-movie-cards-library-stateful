// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <div>
          <label htmlFor="link" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="link"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.shape({
    searchText: PropTypes.string,
  }).isRequired,
};
SearchBar.propTypes = {
  onSearchTextChange: PropTypes.shape({
    onSearchTextChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
