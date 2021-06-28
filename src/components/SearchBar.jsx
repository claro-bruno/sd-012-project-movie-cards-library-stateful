import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Checkbox from './Checkbox';
import Select from './Select';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <Input
          label="Inclui o texto:"
          type="text"
          name="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />

        <Checkbox
          label="Mostrar somente favoritos"
          type="checkbox"
          name="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />

        <Select
          label="Filtrar por gênero"
          type="select"
          name="select"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
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
