import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBarInput from './SearchBarInput';
import FormSelect from './FormSelect';

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
    const optionsArray = ['', 'action', 'comedy', 'thriller'];
    return (
      <form data-testid="search-bar-form">
        <SearchBarInput
          type="text"
          value={ searchText }
          onChange={ (e) => onSearchTextChange(e.target) }
          name="searchText"
        />
        <SearchBarInput
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ (e) => onBookmarkedChange(e.target) }
          name="bookmarkedOnly"
        />
        <FormSelect
          options={ optionsArray }
          value={ selectedGenre }
          onChange={ (e) => onSelectedGenreChange(e.target) }
          name="selectedGenre"
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
}.isRequired;

export default SearchBar;
