import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            name=""
            id=""
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = ({
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.string,
}).isRequired;

export default SearchBar;
