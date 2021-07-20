import React, { Component } from 'react';
import PropType from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="inclui texto" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="inclui texto"
          />
        </label>
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            id="checkbox"
          />
        </label>
        <label htmlFor="seleciona" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="seleciona"
            id="seleciona"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
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

SearchBar.propTypes = {
  searchText: PropType.string.isRequired,
  onSearchTextChange: PropType.func.isRequired,
  bookmarkedOnly: PropType.bool.isRequired,
  onBookmarkedChange: PropType.func.isRequired,
  selectedGenre: PropType.string.isRequired,
  onSelectedGenreChange: PropType.func.isRequired,
};

export default SearchBar;
