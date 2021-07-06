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
          onSearchTextChange={((item) => item)}
          bookmarkedOnly={false}
          onBookmarkedChange={((item) => item)}
          selectedGenre="string"
          onSelectedGenreChange={((item) => item)}
        />
        {/* { <MovieList movies={this.props.movies} />
        <AddMovie />} */}
      </div>
    );
  }
}

export default MovieLibrary;
