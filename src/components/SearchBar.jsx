import React from 'react';
import Input from './Input';

class SearchBar extends React.Component {
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
        <Input
          id="movie-name-filter"
          name="searchText"
          type="text"
          placeholder='"Trybe Wars"'
          labelText="Inclui o texto"
          value={ searchText }
          onChange={ onSearchTextChange }
          testeid="text-input"
        />
        <Input
          id="movie-bookmark-filter"
          name="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          labelText="Mostrar somente favoritos"
          testeid="checkbox-input"
        />
        <label htmlFor="movie-genre-filter" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="movie-genre-filter"
            name="selectedGenre"
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

export default SearchBar;
