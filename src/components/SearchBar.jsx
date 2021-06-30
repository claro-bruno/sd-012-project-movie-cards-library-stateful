import React from 'react';
import PropTypes from 'prop-types';
import LabelInput from './MyComponents/LabelInput';

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
        <LabelInput
          id="include-text"
          name="searchText"
          dataTestidLabel="text-input-label"
          textLabel="Inclui o texto:"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          dataTestidInput="text-input"
        />
        <LabelInput
          id="show-favorites"
          dataTestidLabel="checkbox-input-label"
          textLabel="Mostrar somente favoritos"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          dataTestidInput="checkbox-input"
        />
        <label
          htmlFor="Filtrar por gênero"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            data-testid="select-input"
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
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
export default SearchBar;
// Links
// PropTypes https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
