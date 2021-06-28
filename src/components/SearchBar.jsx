import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">

        <label
          htmlFor="textInclude"
          data-testid="text-input-label"
        >
          Inclui o texto
          <input
            type="text"
            id="textInclude"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>

        <label
          htmlFor="checkboxFavorites"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="checkboxFavorites"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>

      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
};

export default SearchBar;
