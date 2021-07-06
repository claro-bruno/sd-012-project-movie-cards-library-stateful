import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form className="form" data-testid="search-bar-form">
          <label data-testid="text-input-label">
            {' '}
            Inclui o texto:
            <input data-testid="text-input" type="text" value={ searchText } onChange={ onSearchTextChange } />
            <label data-testid="checkbox-input-label">
              {' '}
              Mostrar somente favoritos
              <input data-testid="checkbox-input" type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
            </label>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
