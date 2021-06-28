import React, { Component } from 'react';
import SearchBar from './SearchBar';
import movies from '../data';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.filterByBookmark = this.filterByBookmark.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.filterByBookmark());
  }

  filterByBookmark() {
    const { bookmarkedOnly, movies: stateMovies } = this.state;

    if (bookmarkedOnly) {
      this.setState({
        movies: stateMovies.filter(({ bookmarked }) => bookmarked === true),
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: stateMovies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ stateMovies } />
      </section>
    );
  }
}

export default MovieLibrary;
