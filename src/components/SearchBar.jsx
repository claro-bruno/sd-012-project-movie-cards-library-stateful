// implement SearchBar component here
import React from 'react';
import { func, string, bool } from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="search" className="col-12">
          Inclui o texto:
          <input
            id="search"
            className="form-control"
            type="text"
            placeholder="O Que Você Procura?"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="search-check">
          Mostrar somente favoritos
          <input
            id="search-check"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <div className="row ml-5">
          <label data-testid="select-input-label ml-5" htmlFor="search-select">
            Filtrar por gênero
            <select
              id="search-select"
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
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;
