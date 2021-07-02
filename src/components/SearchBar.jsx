import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Requisito 01 - A criação deste componente

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange,
      bookmarkedOnly, selectedGenre, onSelectedGenreChange } = this.props;
    return (
    /* Requisito 02 */
    /* Requisito 03 */
      <div>
        <form data-testid="search-bar-form" className="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
            <input
              id="searchText"
              type="text"
              data-testid="text-input"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          {/* Requisito 4 */}
          <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
            Mostrar somente favoritos
            <input
              id="bookmarkedOnly"
              type="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          {/* Requisito 5 */}
          <label data-testid="select-input-label" htmlFor="selectedGenre">
            Filtrar por gênero
            <select
              id="selectedGenre"
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
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
