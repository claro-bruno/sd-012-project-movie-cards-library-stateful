// implement SearchBar component here

import React from 'react';
import InputText from './SearchBarInputs/inputText';
import InputCheckbox from './SearchBarInputs/inputCheckbox';
import InputSelect from './SearchBarInputs/inputSelect';

class SearchBar extends React.Component {

  render() {
    const {searchText, onSearchTextChange, bookmarkedOnly,
       onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props
    return <>
    <form data-testid="search-bar-form">
      <InputText valueId={searchText} onChangeEvent={onSearchTextChange} />
      <InputCheckbox checkedId={bookmarkedOnly} onChangeCheck={onBookmarkedChange} />
      <InputSelect selectValue={selectedGenre} onChangeSelect={onSelectedGenreChange} />
    </form>
    </>
  }
}

export default SearchBar;