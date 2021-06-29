// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovieFunction = this.addMovieFunction.bind(this);
  }

  onSearchTextChange(e) {
    const textFilter = e.target.value;
    const { movies } = this.props;
    if (textFilter === '') {
      this.setState({
        movies,
        searchText: textFilter,
      });
    } else {
      this.setState({
        movies: movies.filter(
          (movie) => movie.title.includes(textFilter)
           || movie.subtitle.includes(textFilter)
           || movie.storyline.includes(textFilter),
        ),
        searchText: textFilter,
      });
    }
  }

  onBookmarkedChange(e) {
    const bookmarkedFilter = e.target.checked;
    const { movies } = this.props;
    if (bookmarkedFilter) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarked === bookmarkedFilter),
        bookmarkedOnly: bookmarkedFilter,
      });
    } else {
      this.setState({
        movies,
        bookmarkedOnly: bookmarkedFilter,
      });
    }
  }

  onSelectedGenreChange(e) {
    const genreFilter = e.target.value;
    const { movies } = this.props;
    if (genreFilter === '') {
      this.setState({
        movies,
        selectedGenre: genreFilter,
      });
    } else {
      this.setState({
        movies: movies.filter((movie) => movie.genre === genreFilter),
        selectedGenre: genreFilter,
      });
    }
  }

  addMovieFunction(movie) {
    const { movies } = this.props;
    const moviesArray = [...movies, movie];
    this.setState({
      movies: moviesArray,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieFunction } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
