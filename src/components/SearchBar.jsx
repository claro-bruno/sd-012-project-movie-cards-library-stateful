import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  /* constructor(props) {
      super(props);
  } */

  render() {
    const { onSearchTextChange, searchText, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="incluiTexto"
          data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          type="text"
          id="incluiTexto"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
        <label
          htmlFor="incluiCheckbox"
          data-testid="checkbox-input-label">
          Mostra somente favoritos
        </label>
        <input
          type="checkbox"
          id="incluiCheckbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
