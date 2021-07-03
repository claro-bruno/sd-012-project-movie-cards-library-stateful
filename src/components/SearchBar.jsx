import React from 'react';
import PropTypes from 'prop-types';
import InputText from './myComponents/InputText';

class SearchBar extends React.Component {
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
        <InputText value={ searchText } onChange={ onSearchTextChange } />
        <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="search-checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            id="search-checkbox"
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="filter-select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="filter-select"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            id="filter-select"
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comdey">Comédia</option>
            <option value="thriller">Suspense</option>
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
