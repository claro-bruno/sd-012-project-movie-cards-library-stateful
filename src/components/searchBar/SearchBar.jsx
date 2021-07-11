import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Select from '../Select';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          labelTestId="text-input-label"
          labelText="Inclui o texto"
          name="searchText"
          inputTestId="text-input"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <Input
          labelTestId="checkbox-input-label"
          labelText="Mostrar somente favoritos"
          name="bookmarkedOnly"
          inputTestId="checkbox-input"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <Select value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
