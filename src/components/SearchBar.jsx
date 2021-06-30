import React from 'react';

class SearchBar extends React.Component {
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
          <label data-testid="text-input-label">Inclui o texto:</label>
          <input value={ searchText } onChange={ onSearchTextChange} data-testid="text-input"></input>
      </form>
    );
  }
}

export default SearchBar;
