// implement SearchBar component here
import React, { Component } from 'react';
import FilterInput from './FilterInput';
import GenreOption from './GenreOption';

export default class SearchBar extends Component {
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
        <FilterInput
          label="Inclui o texto"
          labeltestid="text-input-label"
          value={ searchText }
          onChange={ onSearchTextChange }
          type="text"
          id="name-filter"
          fieldtestid="text-input"
        />
        <FilterInput
          label="Mostrar somente favoritos"
          labeltestid="checkbox-input-label"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          type="checkbox"
          id="favorites-filter"
          fieldtestid="checkbox-input"
        />
        <label htmlFor="genre-filter" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <GenreOption inner="Todos" value="" testid="select-option" />
            <GenreOption inner="Ação" value="action" testid="select-option" />
            <GenreOption inner="Comédia" value="comedy" testid="select-option" />
            <GenreOption inner="Suspense" value="thriller" testid="select-option" />
          </select>
        </label>

      </form>
    );
  }
}
