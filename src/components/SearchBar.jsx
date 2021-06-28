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
      <div>
        <h2></h2>

      </div>
    );
  }
}

export default SearchBar;