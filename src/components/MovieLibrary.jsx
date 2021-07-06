import React, { Component } from 'react';
// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText="oi"
          onSearchTextChange={ ((item) => item) }
          bookmarkedOnly={ true }
          onBookmarkedChange={ ((item) => item) }
          selectedGenre="oi"
          onSelectedGenreChange={ ((item) => item) }
        />
        {/* <MovieList movies={this.props.movies} /> */}
        <AddMovie
          onClick={ ((item) => item) }
        /> 
      </div>
    );
  }
}

export default MovieLibrary;
