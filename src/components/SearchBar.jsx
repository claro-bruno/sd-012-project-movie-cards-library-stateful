// implement SearchBar component here
import React from 'react';
import ProtoTypes from 'prop-types';

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
        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="bookMarkedOnly"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>

        <label htmlFor="select-input-label" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="selectedGenre"
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
  searchText: ProtoTypes.string.isRequired,
  onSearchTextChange: ProtoTypes.func.isRequired,
  bookmarkedOnly: ProtoTypes.bool.isRequired,
  onBookmarkedChange: ProtoTypes.func.isRequired,
  selectedGenre: ProtoTypes.string.isRequired,
  onSelectedGenreChange: ProtoTypes.func.isRequired,
};

export default SearchBar;
