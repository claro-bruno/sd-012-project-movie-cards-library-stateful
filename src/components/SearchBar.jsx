import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  /* constructor(props) {
      super(props);
  } */

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
      <form
        data-testid="search-bar-form">
        <label htmlFor="incluiTexto"
          data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="incluiTexto"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"/>
        </label>
        <label
          htmlFor="incluiCheckbox" 
          data-testid="checkbox-input-label">
          Mostra somente favoritos
          <input
            type="checkbox" id="incluiCheckbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"/>
        </label>
        <label
          htmlFor="incluiSelect"
          data-testid="select-input-label">
          Filtra por gênero
          <select
            id="incluiSelect"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input">
            <option
              value="" 
              data-testid="select-option">
              Todos
            </option>
            <option
              value="action" 
              data-testid="select-option">
              Ação
            </option>
            <option
              value="comedy" 
              data-testid="select-option">
              Comédia
            </option>
            <option
              value="thriller" 
              data-testid="select-option">
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
};

export default SearchBar;
