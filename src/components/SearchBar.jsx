import React from 'react';
import PropTypes from 'prop-types';
import SearchText from './SearchText';

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
        <SearchText searchText={ searchText } onSearchTextChange={ onSearchTextChange } />
        <label htmlFor="Mostrar somente favoritos" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            id="Mostrar somente favoritos"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="Filtrar por gênero" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name={ selectedGenre }
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            id="Filtrar por gênero"
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
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: {},
  bookmarkedOnly: '',
  onBookmarkedChange: {},
  selectedGenre: '',
  onSelectedGenreChange: {},
};

export default SearchBar;
