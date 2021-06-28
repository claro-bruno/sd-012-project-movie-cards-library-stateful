// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterInput from './FilterInput';
// import GenreOption from './GenreOption';
import FilterSelect from './FilterSelect';

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
      <form data-testid="search-bar-form" className="filter-form">
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
        <FilterSelect value={ selectedGenre } onChange={ onSelectedGenreChange } />
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
