// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      // bookmarkedOnly,
      // onBookmarkedChange,
      // selectedGenre,
      // onSelectedGenreChange,
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
        {/* <Input
          labelText="Mostrar somente favoritos"
          labelId="checkbox-input-label"
          inputId="checkbox-input"
          inputType="checkbox"
          checkedInput={ bookmarkedOnly }
          onChangeInput={ onBookmarkedChange }
        />
        <Input
          labelText="Filtrar por gênero"
          labelId="select-input-label"
          inputId="select-input"
          inputType="select"
          inputValue={ selectedGenre }
          onChangeInput={ onSelectedGenreChange }
        /> */}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  // onBookmarkedChange: PropTypes.func.isRequired,
  // bookmarkedOnly: PropTypes.string.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  // onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
