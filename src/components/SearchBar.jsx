import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          type="text"
          name="text-search-bar"
          labelText="Inclui o texto:"
          dataTestidLabel="text-input-label"
          value={ searchText }
          change={ onSearchTextChange }
          dataTestidInput="text-input"
        />
        <Input
          type="checkbox"
          name="checkbox-search-bar"
          labelText="Mostrar somente favoritos"
          dataTestidLabel="checkbox-input-label"
          checked={ bookmarkedOnly }
          change={ onBookmarkedChange }
          dataTestidInput="checkbox-input"
        />
        <label
          data-testid="select-input-label"
          htmlFor="select"
        >
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
  bookmarkedOnly: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
