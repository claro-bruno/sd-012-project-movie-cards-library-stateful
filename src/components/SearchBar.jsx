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
          text={ searchText }
          onChangeText={ onSearchTextChange }
        />
        <InputCheckBox
          input={ bookmarkedOnly }
          onChangeInput={ onBookmarkedChange }
        />
        <InputSelect
          gender={ selectedGenre }
          onChangeGender={ onSelectedGenreChange }
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
