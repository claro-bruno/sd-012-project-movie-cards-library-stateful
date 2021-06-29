import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            Inclui o texto:
            <input
              data-testid="checkbox-input"
              type="text"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
        </form>

      </div>
    );
  }
}

export default SearchBar;
