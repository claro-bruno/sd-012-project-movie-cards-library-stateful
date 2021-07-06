// implement SearchBar component here
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
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input-label" data-testid="text-input-label">
            Inclui o texto:
            <input
              name="textInput"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="favoritesOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="favoritesOnly"
              name="favoritesOnly"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
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
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.func.isRequired,
};

export default SearchBar;
