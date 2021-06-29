import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBarFormInput from './SearchBarFormInput';

class SearchBar extends Component {
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
        <SearchBarFormInput
          type="text"
          value={ searchText }
          onChange={ (e) => onSearchTextChange(e.target) }
          name="searchText"
        />
        <SearchBarFormInput
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ (e) => onBookmarkedChange(e.target) }
          name="bookmarkedOnly"
        />
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ (e) => onSelectedGenreChange(e.target) }
            data-testid="select-input"
            name="selectedGenre"
          >
            <option value="" data-testid="select-option">
              Todos
            </option>
            <option value="action" data-testid="select-option">
              Ação
            </option>
            <option value="comedy" data-testid="select-option">
              Comédia
            </option>
            <option value="thriller" data-testid="select-option">
              Suspense
            </option>
          </select>
        </label>
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
}.isRequired;

export default SearchBar;
