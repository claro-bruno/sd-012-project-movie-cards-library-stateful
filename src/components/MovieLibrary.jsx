// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
  }

  onClick = () => console.log('aqui');

  render() {
    const { movies, onClick } = this.props;
    return (
      <div>
        <br />
        {/* <h2> My awesome movie library </h2> */}
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
