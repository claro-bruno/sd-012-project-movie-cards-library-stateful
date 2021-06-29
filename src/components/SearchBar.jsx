// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { selectedGenre, onSelectedGenreChange, onBookmarkedChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <Input
          label="Inclui o texto:"
          labelTestId="text-input-label"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          inputTestId="text-input"
          labelId="txtInput"
        />
        <Input
          label="Mostrar somente favoritos"
          labelTestId="checkbox-input-label"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          inputTestId="checkbox-input"
          labelId="checkboxInput"
        />
        <label data-testid="select-input-label" htmlFor="selectField">
          Filtrar por gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  bookmarkedOnly: false,
};

export default SearchBar;
