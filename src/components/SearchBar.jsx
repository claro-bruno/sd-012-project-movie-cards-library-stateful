import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-input">Todos</option>
            <option value="action" data-testid="select-input">Ação</option>
            <option value="comedy" data-testid="select-input">Comédia</option>
            <option value="thriller" data-testid="select-input">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
