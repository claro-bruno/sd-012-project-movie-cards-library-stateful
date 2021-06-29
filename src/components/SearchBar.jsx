// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputChecked from './InputChecked';
import InputSelect from './InputSelect';

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
        <InputText
          labelText="Inclui o texto"
          labelId="text-input-label"
          inputId="text-input"
          inputType="text"
          inputValue={ searchText }
          onChangeInput={ onSearchTextChange }
        />
        <InputChecked
          labelText="Mostrar somente favoritos"
          labelId="checkbox-input-label"
          inputId="checkbox-input"
          inputType="checkbox"
          checkedInput={ bookmarkedOnly }
          onChangeInput={ onBookmarkedChange }
        />
        <InputSelect
          labelText="Filtrar por gênero"
          labelId="select-input-label"
          selectId="select-input"
          selectValue={ selectedGenre }
          onChangeInput={ onSelectedGenreChange }
          optionId="select-option"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
