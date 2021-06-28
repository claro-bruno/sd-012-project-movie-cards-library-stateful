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
      <InputText value={searchText} onChange={onSearchTextChange} />
      <InputCheckbox checked={bookmarkedOnly} onChange={onBookmarkedChange} />
      <InputSelect vallue={selectedGenre} onChange={onSelectedGenreChange} />
    </form>
    </>
  }
}

export default SearchBar;