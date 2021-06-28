// implement SearchBar component here
import React, { Component } from 'react';
import FilterInput from './FilterInput';

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
      </form>
    );
  }
}
