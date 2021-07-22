import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';

export default class SearchBar extends Component {
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
      <div>
        <form data-testid="search-bar-form">
          <TextInput
            searchText={ searchText }
            onSearchTextChange={ onSearchTextChange }
          />

          <CheckboxInput
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ onBookmarkedChange }
          />

          <SelectInput
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ onSelectedGenreChange }
          />
        </form>
      </div>
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
