// implement MovieLibrary component here
import React, { Component } from 'react';

// import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  /*  constructor() {
    super();
    <MovieList movies={ this.props.movies } />
  } */

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
