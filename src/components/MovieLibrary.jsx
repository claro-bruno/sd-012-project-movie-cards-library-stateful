import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText="string"
          onSearchTextChange="callback"
          bookmarkedOnly="boolean"
          onBookmarkedChange="callback"
          selectedGenre="string"
          onSelectedGenreChange="callback"
        />
        {/* { <MovieList movies={this.props.movies} />
        <AddMovie />} */}
      </div>
    );
  }
}

export default MovieLibrary;
