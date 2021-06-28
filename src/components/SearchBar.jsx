import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectdGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input data-testid="text-input" value={ searchText } onChange={ onSearchTextChange } type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
