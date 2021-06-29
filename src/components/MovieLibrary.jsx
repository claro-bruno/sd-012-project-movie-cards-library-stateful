// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movieList from '../data';

// prettier-ignore
class MovieLibrary extends React.Component {
  render() {
    return (
      <section>
        <SearchBar />
        <MovieList movies={ movieList } />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
