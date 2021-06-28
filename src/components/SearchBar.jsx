import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    const { onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textInput" data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            data-testid="text-input"
            name="textInput"
            value={ searchText }
            id="textInput"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="favoritesOnly" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            name="favoritesOnly"
            checked={ bookmarkedOnly }
            id="favoritesOnly"
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="genreOption">
          Filtrar por gênero
          <select name="" id="genreOption" data-testid="select-input-label" onChange={}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
};

export default SearchBar;
