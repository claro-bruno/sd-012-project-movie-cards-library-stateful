import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class SearchBar extends React.Component {
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
          label="Inclui o texto:"
          type="text"
          name="searchText"
          ctrl="text"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
        <Input
          label="Mostrar somente favoritos"
          type="checkbox"
          name="bookmarkedOnly"
          ctrl="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
        />
        <Select
          label="Filtrar por gênero"
          name="selectedGenre"
          ctrl="select"
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
