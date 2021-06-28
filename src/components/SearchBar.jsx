import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends React.Component {
  render() {
    const { props } = this;
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = props;
    return (
      <form data-testid="search-bar-form">
        <Input
          labelDataTestId="text-input-label"
          inputLabel="Inclui o texto:"
          inputDataTestId="text-input"
          inputType="text"
          inputValue={ searchText }
          inputOnChange={ onSearchTextChange }
        />
        <Input
          labelDataTestId="checkbox-input-label"
          inputLabel="Mostrar somente favoritos"
          inputDataTestId="checkbox-input"
          inputType="checkbox"
          inputChecked={ bookmarkedOnly }
          inputOnChange={ onBookmarkedChange }
        />
        <label htmlFor="select-genre" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="select-genre"
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
