// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly } = this.props;
    const { /* selectedGenre, onSelectedGenreChange, */ onBookmarkedChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <Input
          label="Inclui o texto:"
          labelTestId="text-input-label"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          inputTestId="text-input"
          labelId="txtInput"
        />
        <Input
          label="Mostrar somente favoritos"
          labelTestId="checkbox-input-label"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          inputTestId="checkbox-input"
          labelId="checkboxInput"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  bookmarkedOnly: false,
};

export default SearchBar;
