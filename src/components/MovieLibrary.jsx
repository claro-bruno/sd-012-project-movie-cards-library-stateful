// implement MovieLibrary component here
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => console.log('onnSearchTextChange') }
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre="Todos"
          onSelectedGenreChange=""
        />
        <AddMovie onClick={ () => console.log('AddMovie') } />
        <MovieList movies={ movies } />

      </div>
    );
  }
}

export default MovieLibrary;
