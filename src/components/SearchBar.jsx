import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './generics/Input';
import Select from './generics/Select';
import genders from '../data/data';

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
      <form data-testid="search-bar-form" className="form-searchBar">

        <Input
          id="include-text"
          dataTestidLabel="text-input-label"
          textLabel="Inclui o texto:"
          value={ searchText }
          onChange={ onSearchTextChange }
          dataTestidInput="text-input"
        />

        <Input
          id="show-favorites"
          dataTestidLabel="checkbox-input-label"
          textLabel="Mostrar somente favoritos"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          dataTestidInput="checkbox-input"
        />

        <Select
          id="gender-filter"
          dataTestidLabel="select-input-label"
          dataTestidOption="select-option"
          dataTestidSelect="select-input"
          textLabel="Filtrar por gênero"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          options={ genders }
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
