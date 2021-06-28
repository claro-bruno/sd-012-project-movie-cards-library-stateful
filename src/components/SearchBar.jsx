import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange} = this.props
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input id="text-input" data-testid="text-input" value={searchText} type="text" onChange={onSearchTextChange}/>
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input id="checkbox-input" data-testid="checkbox-input" type="checkbox" checked ={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar;