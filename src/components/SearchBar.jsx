import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        {/* Requisito 2 acima */}
        {/* Requisito 3 */}
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input data-testid="text-input" type="text" value={ searchText } onChange={ onSearchTextChange } />
        </label>
        {/* Requisito 4 */}
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input type="checkbox" data-testid="checkbox-input" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        </label>
        {/* Requisito 5 */}
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" onChange={ onSelectedGenreChange } value={ selectedGenre }>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
// Parte do req 1, a outra parte são as props desestruturadas...
SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
