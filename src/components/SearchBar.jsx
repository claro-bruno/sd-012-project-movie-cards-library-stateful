// implement SearchBar component here
import React from 'react';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import SelectOptions from './SelectOptions';

class SearchBar extends React.Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form" />
        <TextInput
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <Checkbox
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <SelectOptions
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <form />
      </div>
    );
  }
}

export default SearchBar;
