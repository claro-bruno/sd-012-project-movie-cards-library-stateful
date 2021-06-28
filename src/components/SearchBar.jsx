import React from 'react';
import PropTypes from 'prop-types';
import Input from './myComponents/Input';
import Select from './myComponents/Select';

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
        <Input
          inputID="text-input"
          labelID="text-input-label"
          value={ searchText }
          handleChange={ onSearchTextChange }
          text="Inclui o texto"
          name="searchText"
        />
        <Input
          type="checkbox"
          inputID="checkbox-input"
          labelID="checkbox-input-label"
          checked={ bookmarkedOnly }
          name="bookmarkedOnly"
          handleChange={ onBookmarkedChange }
          text="Mostrar somente favoritos"
        />
        <Select
          text="Filtrar por gênero"
          selectID="select-input"
          labelID="select-input-label"
          value={ selectedGenre }
          handleChange={ onSelectedGenreChange }
          name="selectedGenre"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </Select>
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
