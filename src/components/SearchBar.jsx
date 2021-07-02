import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './aux/SearchBarInput';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form" className="form">
        <SearchBarInput
          labelId="text-input-label"
          inputId="text-input"
          texto="Inclui o texto"
          tipo="text"
          nome="searchText"
          valor={ searchText }
          func={ onSearchTextChange }
        />
        <SearchBarInput
          labelId="checkbox-input-label"
          inputId="checkbox-input"
          texto="Mostrar somente favoritos"
          tipo="checkbox"
          nome="bookmarkedOnly"
          checked={ bookmarkedOnly }
          func={ onBookmarkedChange }
        />
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
            name="selectedGenre"
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

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
