import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';
import genreSelectOptions from '../data/genreSelectOptions';

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
        <Input
          dataTestidLabel="text-input-label"
          textLabel="Inclui o texto"
          data-testid="text-input"
          id="text-input"
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          isRequired={ false }
        />
        <Input
          dataTestidLabel="checkbox-input-label"
          textLabel="Mostrar somente favoritos"
          data-testid="checkbox-input"
          id="checkbox-input"
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          isRequired={ false }
        />
        <Select
          dataTestidLabel="select-input-label"
          textLabel="Filtrar por gênero"
          dataTestid="select-input"
          onChange={ onSelectedGenreChange }
          name="selectedGenre"
          genre={ selectedGenre }
          dataTestidOption="select-option"
          options={ genreSelectOptions }
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
