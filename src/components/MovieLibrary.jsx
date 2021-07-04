import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   inputValue: '',
  //   //   searchText: '', // texto de busca por filmes//
  //   //   bookmarkedOnly: false, // um boleano para filtrar filme favo//
  //   //   selectedGenre: '', // genero do filme///
  //   //   movies: movies,
  //   };
  // }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
