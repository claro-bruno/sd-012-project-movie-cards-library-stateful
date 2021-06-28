import React from 'react';
import Input from './Input';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          type="text"
          name=""
          labelText="Inclui o texto:"
          dataTestidLabel="text-input-label"
          value={ searchText }
          change={ onSearchTextChange }
          dataTestidInput="text-input"
        />
      </form>
    );
  }
}

export default SearchBar;
