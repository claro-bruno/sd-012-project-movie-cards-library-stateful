import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label"
          >
            Inclui o texto
            <input
              onChange={ onSearchTextChange }
              type="text"
              data-testid="text-input"
              value={ searchText }
              id="texto"
              name="texto"
            />
          </label>
          <label
            htmlFor="checkbox"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
            <input
              onChange={ onBookmarkedChange }
              type="Checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              id="checkbox"
            />
          </label>
          <label
            htmlFor="select"
            data-testid="select-input-label"
          >
            Filtrar por gênero
            <select
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
              id="select"
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

export default SearchBar;
