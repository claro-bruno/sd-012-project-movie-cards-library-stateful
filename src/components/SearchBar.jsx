import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
          <input type="text" data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
          </label>
        </form>
      </div>
    );
  }
}



export default SearchBar;
