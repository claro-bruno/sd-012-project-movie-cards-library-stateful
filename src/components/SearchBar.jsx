import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <p>
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o textos
            <input
              type="text"
              data-testid="text-input"
              value={ searchText }
              name="searchText"
              onChange={ onSearchTextChange }
            />
          </label>
        </p>
        <p>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              test="checkbox-input"
              data-testid="checkbox-input"
              name="bookmarkedOnly"
              onChange={ onBookmarkedChange }
            />
          </label>
        </p>
        <label htmlFor="select-input" data-testid="select-input-label">
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
}// implement AddMovie component here

export default SearchBar;
