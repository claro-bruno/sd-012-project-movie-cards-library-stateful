import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form className="form" data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            {' '}
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
            <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
              {' '}
              Mostrar somente favoritos
              <input
                data-testid="checkbox-input"
                type="checkbox"
                checked={ bookmarkedOnly }
                onChange={ onBookmarkedChange }
              />
            </label>
          </label>
          <label htmlFor="select-input" data-testid="select-input-label">
            <select value={ selectedGenre } onChange={ onSelectedGenreChange }> </select>
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
