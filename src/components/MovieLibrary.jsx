import React, { Component } from 'react';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: props.movies,
    };
    this.searchTexChangeHandler = this.searchTexChangeHandler.bind(this);
    this.bookmarkedChangeHandler = this.bookmarkedChangeHandler.bind(this);
    this.genreChangeHandler = this.genreChangeHandler.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
  }

  searchTexChangeHandler(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  bookmarkedChangeHandler() {
    this.setState((prev) => ({ bookmarkedOnly: !prev.bookmarkedOnly }));
  }

  genreChangeHandler(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }

  // addNewMovie() {

  // }

  filteredMovies() {
    let { movies } = this.props;
    let { searchText } = this.state;
    const { selectedGenre, bookmarkedOnly } = this.state;
    searchText = searchText.toLowerCase();
    if (bookmarkedOnly) {
      movies = movies.filter((movie) => movie.bookmarked);
    }
    if (searchText !== '') {
      movies = movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText)
      ));
    }
    if (selectedGenre !== '') {
      movies = movies.filter((movie) => movie.genre === selectedGenre);
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchTexChangeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedChangeHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.genreChangeHandler }
        />
        <MovieList
          movies={ this.filteredMovies() }
        />
        <AddMovie addNewMovie={ this.addNewMovie } />
      </div>
    );
  }
}

export default MovieLibrary;
