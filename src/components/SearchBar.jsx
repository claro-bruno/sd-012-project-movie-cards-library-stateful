import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="text" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="text"
          />
        </label>
        <label htmlFor="input1" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
            id="input1"
            checked={ bookmarkedOnly }
          />
        </label>
        <label htmlFor="select" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="select"
            onChange={ onSelectedGenreChange }
            id="select"
            value={ selectedGenre }
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

SearchBar.propTypes = ({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}).isRequired;

SearchBar.defaultProps = {
  searchText: '',
  selectedGenre: '',
};

export default SearchBar;
