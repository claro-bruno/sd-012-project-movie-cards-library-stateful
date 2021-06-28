import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { filter } = this.props;
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange
    } = filter;
    return (
      <form data-testid="search-bar-form">
        [/** Resolvi um problema do link com o htmlFor consultado no link:
        https://stackoverflow.com/questions/54446655/eslint-rule-for-label */]
        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="text-input-label"
          />
        </label>
        <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="checkbox-input-label"
          />
        </label>

      </form>
    );
  }
}

SearchBar.propTypes = {
  filter: PropTypes.shape({
    searchText: PropTypes.string.isRequired,
    onSearchTextChange: PropTypes.func.isRequired,
    bookmarkedOnly: PropTypes.bool.isRequired,
    onBookmarkedChange: PropTypes.func.isRequired,
    // selectedGenre: PropTypes.string.isRequired,
    // onSelectedGenreChange: PropTypes.callback.isRequired,
  }),
};

SearchBar.defaultProps = {
  filter: { },
};

export default SearchBar;
