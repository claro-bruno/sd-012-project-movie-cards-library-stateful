import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// implement AddMovie component here

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText="Final Fantasy"
          onSearchTextChange={ () => console.log('onSearchTextChange callback') }
          bookmarkedOnly={ false }
          onBookmarkedChange={ () => console.log('onBookmarkedChange callback') }
          selectedGenre="comedy"
          onSelectedGenreChange={ () => console.log('onSelectedGenreChange callback') }
        />

        <AddMovie />
      </div>
    );
  }
}
export default MovieLibrary;
