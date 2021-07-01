// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputCheckBox from './InputCheckBox';
import InputSelect from './InputSelect';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      selectedGenre,
      onSelectedGenreChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <InputCheckBox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <InputSelect
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;

export default SearchBar;
