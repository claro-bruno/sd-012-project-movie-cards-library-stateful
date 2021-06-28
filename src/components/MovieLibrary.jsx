import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}

export default MovieLibrary;
