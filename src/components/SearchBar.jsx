import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="inclui-texto" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="inclui-texto"
              type="text"

              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="checkbox-favoritos" data-testid="checkbox-input-label">
            Mostrar somente favoritos:
            <input
              id="checkbox-favoritos"
              type="checkbox"
              value={ searchText }
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
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
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
