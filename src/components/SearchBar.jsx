import React from 'react';
import PropTypes from 'prop-types';
import Input from './myComponents/Input';

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
          inputID="text-input"
          labelID="text-input-label"
          value={ searchText }
          handleChange={ onSearchTextChange }
          text="Inclui o texto"
        />
        <Input
          type="checkbox"
          inputID="checkbox-input"
          labelID="checkbox-input-label"
          checked={ bookmarkedOnly }
          handleChange={ onBookmarkedChange }
          text="Mostrar somente favoritos"
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
