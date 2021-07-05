import React from 'react';
import PropType from 'prop-types';
import Input from './Input';
import Select from './Select';

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
          label="Inclui o texto:"
          inputName=""
          inputType="text"
          inputValue={ searchText }
          onChangeInput={ onSearchTextChange }
          inputID="text-input"
        />
        <Input
          label="Mostrar somente favoritos"
          inputName=""
          inputType="checkbox"
          onChangeInput={ onBookmarkedChange }
          inputID="checkbox-input"
          checked={ bookmarkedOnly }
          inputValue={ bookmarkedOnly }
        />
        <Select
          label="Filtrar por gênero"
          inputName=""
          inputValue={ selectedGenre }
          onChangeInput={ onSelectedGenreChange }
          inputID="select-input"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropType.string.isRequired,
  onSearchTextChange: PropType.func.isRequired,
  bookmarkedOnly: PropType.bool.isRequired,
  onBookmarkedChange: PropType.func.isRequired,
  selectedGenre: PropType.string.isRequired,
  onSelectedGenreChange: PropType.func.isRequired,
};

export default SearchBar;
