import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Checkbox from './Checkbox';
import Select from './Select';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          label="Inclui o texto"
          type="text"
          name="inputText"
          value={ searchText }
          onChange={ onSearchTextChange }
          labelId="text-input-label"
          inputId="text-input"
        />

        <Checkbox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />

        <Select
          label="Filtrar por gênero"
          name="selectedGenre"
          value={ selectedGenre }
          labelId="select-input-label"
          inputId="select-input"
          optionId="select-option"
          onSelectedGenreChange={ onSelectedGenreChange }
        />
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
