// implement SearchBar component here

import React from 'react';
import PropTypes from 'prop-types';
import InputText from './SearchBarInputs/inputText';
import InputCheckbox from './SearchBarInputs/inputCheckbox';
import InputSelect from './SearchBarInputs/inputSelect';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText valueId={ searchText } onChangeEvent={ onSearchTextChange } />
        <InputCheckbox checkedId={ bookmarkedOnly } onCheck={ onBookmarkedChange } />
        <InputSelect selectValue={ selectedGenre } onSelect={ onSelectedGenreChange } />
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
