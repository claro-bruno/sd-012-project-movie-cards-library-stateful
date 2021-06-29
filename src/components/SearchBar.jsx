import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

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
        <Input
          labelText="Inclui o texto:"
          dataTestIdLabel="text-input-label"
          type="text"
          name="searchText"
          id="text-input"
          dataTestIdInput="text-input"
          value={ searchText }
          handleChange={ onSearchTextChange }
        />
        <Input
          labelText="Mostrar somente favoritos"
          dataTestIdLabel="checkbox-input-label"
          type="checkbox"
          name="bookmarkedOnly"
          id="checkbox-input"
          dataTestIdInput="checkbox-input"
          checked={ bookmarkedOnly }
          handleChange={ onBookmarkedChange }
        />
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-input"
            name="selectedGenre"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
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
};

export default SearchBar;
