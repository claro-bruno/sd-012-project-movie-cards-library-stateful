import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="search-text"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="book-marked" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="book-marked"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-genre"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGeneChange }
          >
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
