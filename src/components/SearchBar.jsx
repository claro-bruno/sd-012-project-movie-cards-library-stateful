import React from 'react';
import PropTypes from 'prop-types';

class SeachBar extends React.Component {
  onSearchTextChange() {

  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="botao-text" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            id="botao-text"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="checkbox" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="checkbox"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            id="select"
            value={ selectedGenre }
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
export default SeachBar;

SeachBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: propTypes.func.isRequired,
};
