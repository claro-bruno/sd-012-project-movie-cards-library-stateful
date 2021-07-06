import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './searchBar/TextInput';
import CheckboxInput from './searchBar/CheckboxInput';
import Select from './searchBar/Select';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <TextInput value={ searchText } onChange={ onSearchTextChange } />
        <CheckboxInput checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <Select value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </section>
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
