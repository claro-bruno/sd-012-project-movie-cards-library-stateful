import React from 'react';
import SearchBarInput from './formComponents/SearchBarInput';
import SearchBarCheckbox from './formComponents/SearchBarCheckbox';
import SearchBarSelect from './formComponents/SearchBarSelect';

export default class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    
    return (
      <form data-testid="search-bar-form">
        <SearchBarInput
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <SearchBarCheckbox
          onBookmarkedChange={ onBookmarkedChange }
          bookmarkedOnly={ bookmarkedOnly }
        />
        <SearchBarSelect
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}
