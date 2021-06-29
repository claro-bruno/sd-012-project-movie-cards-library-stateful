import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Select from './newComponents/Select';
import Input from './newComponents/Input';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      onSelectedGenreChange,
      selectedGenre } = this.props;

    return (
      <form data-testid="search-bar-form">
        <div>
          <Input
            message="Inclui o texto:"
            dataId="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
          <Input
            message="Mostrar somente favoritos"
            dataId="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          <Select
            message="Filtrar por gênero"
            dataId="select"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          />
        </div>
      </form>);
  }
}

SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
