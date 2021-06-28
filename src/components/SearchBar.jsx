// implement SearchBar component here
import React from 'react';

class SeachBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form" />
        <input type="text" data-testid="text-input-label" value={ searchText } onChange={ onSearchTextChange } />
        <form />
      </div>
    );
  }
}

export default SearchBar;
