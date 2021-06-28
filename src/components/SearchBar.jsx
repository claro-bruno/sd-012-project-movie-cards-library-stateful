// implement SearchBar component here
import React, { Component } from 'react';

// import MovieList from './MovieList';
// import AddMovie from './AddMovie';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange = () => {}

  onBookmarkedChange = () => {}

  onSelectedGenreChange = () => {}

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-input" data-testid="text-input-label">
          <input type="text" id="search-input" data-testid="text-input" />
        </label>
      </form>
    );
  }
}

export default SearchBar;