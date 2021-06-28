import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Requisito 01 - A criação deste componente

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange,
      bookmarkedOnly, selectedGenre, onSelectedGenreChange } = this.props;
    return (
    /* Requisito 02 */
      <form data-testid="search-bar-form">

        <label data-testid="text-input-label" htmlFor="text">
          Inclui o texto
          {/* Requisito 03 */}
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            type="text"
          />
        </label>
        {/* Requisito 4 */}
        <label data-testid="checkbox-input-label" htmlFor="text">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            type="checkbox"
          />
        </label>
        {/* Requisito 5 */}
        <label data-testid="select-input-label" htmlFor="text">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
