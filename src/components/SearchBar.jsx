import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Input from './Input';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">

        <Input
          inputId="textInclude"
          testIdInput="text-input"
          testIdLabel="text-input-label"
          typeInput="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          labelText="Inclui o texto"
        />

        <Input
          inputId="checkboxFavorites"
          testIdInput="checkbox-input"
          testIdLabel="checkbox-input-label"
          typeInput="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          labelText="Mostrar somente favoritos"
        />

        <Select
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />

      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.string.isRequired,
};

export default SearchBar;
