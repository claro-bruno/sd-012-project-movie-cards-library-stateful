import React from 'react';
import Input from './Input';

class SearchBar extends React.Component {
  render() {
    const { props } = this;
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnlye,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenre
      } = props;
    return(
      <form data-testid="search-bar-form">
        <Input 
          labelDataTestId="text-input-label"
          inputLabel="Inclui o texto:"
          inputDataTestId="text-input"
          inputValue={ searchText } 
          inputOnChange={ onSearchTextChange }
        />
      </form>
    );
  }
}

export default SearchBar;
