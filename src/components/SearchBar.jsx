import React from 'react';
import PropTypes from 'prop-types';

class searchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
      // Consegui reduzir as linhas do render graças à dica da colega Adriana Biberg: dividir as props em apenas duas linhas
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="input-includes">
          Inclui o texto:
          <input
            type="text"
            id="input-includes"
            defaulValue={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label
          htmlFor="only-favorites"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="only-favorites"
            id="only-favorites"
            data-testid="checkbox-input"
            defaultChecked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="filter-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="filter-genre"
            id="filter-genre"
            defaulValue={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </form>);
  }
}

searchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default searchBar;
