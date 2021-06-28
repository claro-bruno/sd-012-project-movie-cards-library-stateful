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
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
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
