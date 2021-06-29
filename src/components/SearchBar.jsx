import React from 'react';
import PropTypes from 'prop-types';
import Input from './ComponentsCriados/Input';
import Select from './ComponentsCriados/Select';

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

    const optionsArray = [
      ['Todos', ''],
      ['Ação', 'action'],
      ['Comédia', 'comedy'],
      ['Suspense', 'thriller'],
    ];

    return (
      <form data-testid="search-bar-form">
        <Input
          type="text"
          datatestid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
          labelText="Inclui o texto"
          datatestidLabel="text-input-label"
        />
        <Input
          type="checkbox"
          datatestid="checkbox-input"
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          labelText="Mostrar somente favoritos"
          datatestidLabel="checkbox-input-label"
        />
        <Select
          datatestid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          labelText="Filtrar por gênero"
          datatestidLabel="select-input-label"
          options={ optionsArray }
          datatestidOption="select-option"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
}.isRequired;

export default SearchBar;
