// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange /* bookmarkedOnly */ } = this.props;
    // const { selectedGenre, onSelectedGenreChange, onBookmarkedChange } = this.props;

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
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
