import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { movies }
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
      </div>
    );
  }

}

export default MovieLibrary;
