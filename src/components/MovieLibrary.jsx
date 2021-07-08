import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movieList: movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.textFilter = this.textFilter.bind(this);
    this.bookmarkedFilter = this.bookmarkedFilter.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.newMovie = this.newMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  textFilter(movies, searchText) {
    return movies.filter((movie) => Object.keys(movie).some((key) => {
      let match = false;
      if (typeof (movie[key]) !== 'number' && typeof (movie[key]) !== 'boolean') {
        match = movie[key].includes(searchText);
      }
      return match;
    }));
  }

  bookmarkedFilter(textFilter, bookmarkedOnly) {
    if (bookmarkedOnly === true) {
      return textFilter.filter((movie) => movie.bookmarked === true);
    }
    return textFilter;
  }

  genreFilter(filteredMovies, selectedGenre) {
    let selected = '';
    switch (selectedGenre) {
    case 'action':
      selected = filteredMovies.filter((movie) => movie.genre === 'action');
      break;
    case 'comedy':
      selected = filteredMovies.filter((movie) => movie.genre === 'comedy');
      break;
    case 'thriller':
      selected = filteredMovies.filter((movie) => movie.genre === 'thriller');
      break;
    default:
      selected = filteredMovies;
      break;
    }
    return selected;
  }

  async newMovie(state) {
    state.bookmarked = true;
    state.rating = parseFloat(state.rating);
    this.setState((prevState) => {
      const newMovies = [...prevState.movieList];
      newMovies.push(state);
      return { movieList: newMovies };
    });
  }

  render() {
    const { state } = this;
    const { searchText, bookmarkedOnly, selectedGenre, movieList } = state;
    const searchMovies = this.textFilter(movieList, searchText);
    const filteredMovies = this.bookmarkedFilter(searchMovies, bookmarkedOnly);
    const selectMovies = this.genreFilter(filteredMovies, selectedGenre);

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ selectMovies } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  // searchText: PropTypes.string,
  // bookmarkedOnly: PropTypes.bool,
  // selectedGenre: PropTypes.string,
};

// MovieLibrary.defaultProps = {
//   searchText: '',
//   bookmarkedOnly: false,
//   selectedGenre: '',
// };

export default MovieLibrary;
