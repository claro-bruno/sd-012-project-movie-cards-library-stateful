// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';
import SelectSearchBar from './SelectSearchBar';

class SearchBar extends Component {
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
        <Inputs
          label="Inclui o texto:"
          labelTestId="text-input-label"
          inputName="searchText"
          inputType="text"
          inputTestId="text-input"
          inputValue={ searchText }
          inputOnChange={ onSearchTextChange }
        />
        <Inputs
          label="Mostrar somente favoritos"
          labelTestId="checkbox-input-label"
          inputName="bookmarkedOnly"
          inputType="checkbox"
          inputTestId="checkbox-input"
          inputIsChecked={ bookmarkedOnly }
          inputOnChange={ onBookmarkedChange }
        />
        <SelectSearchBar
          selectLabelTestId="select-input-label"
          selectLabel="Filtrar por gênero"
          selectName="selectedGenre"
          selectId="select-genre-input"
          selectTestId="select-input"
          selectValue={ selectedGenre }
          selectOnChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  movie: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }),
}.isRequired;

export default SearchBar;
