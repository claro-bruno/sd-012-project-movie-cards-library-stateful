import React, { Component } from 'react';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';



class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: props.movies,
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
  bookmarkedChangeHandler(e) {
    this.setState((prev) => ({ bookmarkedOnly: !prev.bookmarkedOnly }));
  }
  genreChangeHandler(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }
  filteredMovies() {
    return this.props.movies;
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          searchText={ this.state.searchText }
          onSearchTextChange={ this.searchTexChangeHandler }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedChangeHandler }
          selectedGenre={ this.state.selectedGenre }
          onSelectedGenreChange={ this.genreChangeHandler }
        />
        <MovieList movies={ this.filteredMovies() } inputValue={ this.state.inputValue } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;