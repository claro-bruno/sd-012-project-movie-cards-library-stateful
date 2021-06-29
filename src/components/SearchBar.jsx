import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Checkbox from './Checkbox';

class SearchBar extends Component {
  // eslint-disable-next-line max-lines-per-function
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form className="container" data-testid="search-bar-form">
        <Input
          type="text"
          id="text"
          name="text"
          label="Inclui o texto:"
          value={ searchText }
          callback={ onSearchTextChange }
        />

        <Checkbox
          id="checkbox"
          label="Mostrar somente favoritos"
          checked={ bookmarkedOnly }
          callback={ onBookmarkedChange }
        />

        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select
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
