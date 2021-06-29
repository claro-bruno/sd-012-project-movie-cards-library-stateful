import React, { Component } from 'react';
import Proptypes from 'prop-types';
// import Imput from './Imput';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      onSelectedGenreChange,
      selectedGenre } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="textInput">
          Inclui o texto:
          <input
            id="textInput"
            data-testid="text-input"
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
          />
        </label>
        <label
          data-testid="checkbox-input-label"
          htmlFor="checkboxInput"
        >
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="selectOption">
          Filtrar por gênero
          <select
            id="selectOption"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>);
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
