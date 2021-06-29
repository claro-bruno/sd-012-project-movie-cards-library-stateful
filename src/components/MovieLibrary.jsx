// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <section>
        <SearchBar />
        <MovieList />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
