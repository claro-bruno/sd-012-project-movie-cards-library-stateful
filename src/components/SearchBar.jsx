import React from 'react';
import PropTypes from 'prop-types';
import SelectComponent from './inputs/SelectComponent';
import InputComponent from './inputs/InputComponent';
import selectOptions from '../searchSelectOptions';

class SearchBar extends React.Component {
  render() {
    const {
      onSearchTextChange,
      searchText,
      onBookmarkedChange,
      bookmarkedOnly,
      onSelectedGenreChange,
      selectedGenre,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <InputComponent
          label="Inclui o texto:"
          stateName="searchText"
          inputType="text"
          identifier="text-input"
          onChangeInput={ onSearchTextChange }
          inputValue={ searchText }
        />
        <InputComponent
          label="Mostrar somente favoritos"
          stateName="bookmarkedOnly"
          inputType="checkbox"
          identifier="checkbox-input"
          onChangeInput={ onBookmarkedChange }
          checked={ bookmarkedOnly }
          inputValue={ bookmarkedOnly }
        />
        <SelectComponent
          label="Filtrar por gênero"
          identifier="select"
          getValue={ selectedGenre }
          onChangeComponent={ onSelectedGenreChange }
          options={ selectOptions }
          name="selectedGenre"
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
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default SearchBar;
