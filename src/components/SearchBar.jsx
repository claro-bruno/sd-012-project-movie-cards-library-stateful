import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  // eslint-disable-next-line max-lines-per-function
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
      <form data-testid="search-bar-form">
        <label
          htmlFor="text-input"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ (e) => onSearchTextChange(e.target) }
            data-testid="text-input"
            name="searchText"
          />
        </label>

        <label
          htmlFor="checkbox-input-label"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ (e) => onBookmarkedChange(e.target) }
            data-testid="checkbox-input"
            name="bookmarkedOnly"
          />
        </label>

        <label
          htmlFor="checkbox-input-label"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ (e) => onSelectedGenreChange(e.target) }
            data-testid="select-input"
            name="selectedGenre"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
      </form>
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
}.isRequired;

export default SearchBar;
