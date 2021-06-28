import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText, onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textInput" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            data-testid="text-input"
            name="textInput"
            value={ searchText }
            id="textInput"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="favoritesOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            name="favoritesOnly"
            checked={ bookmarkedOnly }
            id="favoritesOnly"
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  onBookmarkedChange: PropTypes.func.isRequired,
  favoritesOnly: PropTypes.bool.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
};

export default SearchBar;
