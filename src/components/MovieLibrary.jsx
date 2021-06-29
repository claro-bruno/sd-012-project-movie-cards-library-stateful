import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
  }

  render() {
    return (
      <form>
        <SearchBar />
        <MovieList movies={ movies } />
      </form>
    );
  }
}

export default MovieLibrary;
