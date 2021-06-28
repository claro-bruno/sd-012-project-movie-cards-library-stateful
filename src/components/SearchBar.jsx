import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }


  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange} = this.props
    return (
      <form data-testid="search-bar-form"> 
      <label data-testid="text-input-label">
        <input data-testid="text-input" value={searchText} 
        onChange={onSearchTextChange}>Inclui o texto:</input>
      </label>
      <label data-testid="checkbox-input-label">
        <input data-testid="checkbox-input" checked={bookmarkedOnly} 
        onChange={onBookmarkedChange}>Mostrar somente favoritos</input>
      </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string, 
 }

export default SearchBar;
// implement SearchBar component here
