// implement MovieLibrary component here
import React, { Component } from 'react';
import movies from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

const initialState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies,
};

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.movieAdd = this.movieAdd.bind(this);
  }

  movieAdd(movie) {
    const { movies } = this.props;
    this.setState((previous) => {
      const newMovies = [...previous.movies];
      newMovies.push(movie);
      return { movies: newMovies };
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.movieAdd } />
      </div>
    );
  }
}
