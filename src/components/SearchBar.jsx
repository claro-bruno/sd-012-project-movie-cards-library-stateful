import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Checkbox from './Checkbox';
import SearchBarSelect from './SearchBarSelect';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form className="container" data-testid="search-bar-form">
        <Input
          type="text"
          id="text"
          name="text"
          label="Inclui o texto:"
          value={ searchText }
          callback={ onSearchTextChange }
        />

        <Checkbox
          id="checkbox"
          label="Mostrar somente favoritos"
          checked={ bookmarkedOnly }
          callback={ onBookmarkedChange }
        />

        <SearchBarSelect
          id="select"
          label="Filtrar por gênero"
          value={ selectedGenre }
          callback={ onSelectedGenreChange }
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
