import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    const { onSelectedGenreChange, selectedGenre } = this.props;
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
        <label htmlFor="genreOption" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            name="genreOption"
            value={ selectedGenre }
            id="genreOption"
            onChange={ onSelectedGenreChange }
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
SearchBar.propTypes = ({
  onSearchTextChange: PropTypes.func,
  searchText: PropTypes.string,
  onBookmarkedChange: PropTypes.bool,
  bookmarkedOnly: PropTypes.bool,
  onSelectedGenreChange: PropTypes.func,
  selectedGenre: PropTypes.string,
}).isRequired;

SearchBar.defaultProps = {
  searchText: '',
  selectedGenre: '',
};
export default SearchBar;
