import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <span>SearchBar Component</span>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="shows-only-favorites" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="shows-only-favorites"
              type="checkbox"
              name="shows-only-favorites"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
