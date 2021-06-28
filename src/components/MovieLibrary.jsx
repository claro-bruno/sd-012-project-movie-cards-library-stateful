// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import moviesData from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// const initialState = {
//   searchText: '',
//   bookmarkedOnly: false,
//   selectedGenre: '',
//   movies: moviesData,
// };

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.movieAdd = this.movieAdd.bind(this);
    this.changeText = this.changeText.bind(this);
    this.bookmarkedToggle = this.bookmarkedToggle.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
  }

  changeText(e) {
    const { movies } = this.props;
    const value = e.target.value.toLowerCase();
    if (value !== '') {
      const filtered = movies
        .filter((movie) => movie.title.toLowerCase().includes(value)
        || movie.subtitle.toLowerCase().includes(value)
        || movie.storyline.toLowerCase().includes(value));
      this.setState({
        searchText: e.target.value,
        movies: filtered,
      });
    } else {
      this.setState({
        searchText: '',
        movies,
      });
    }
  }

  bookmarkedToggle(e) {
    const { movies } = this.props;
    const value = e.target.checked;
    const filtered = movies.filter((movie) => movie.bookmarked);
    if (value) {
      this.setState({
        bookmarkedOnly: value,
        movies: filtered,
      });
    } else {
      this.setState({
        bookmarkedOnly: value,
        movies,
      });
    }
  }

  changeGenre(e) {
    const { movies } = this.props;
    const { value } = e.target;
    if (value !== '') {
      const filtered = movies.filter((movie) => movie.genre === value);
      this.setState({
        selectedGenre: value,
        movies: filtered,
      });
    } else {
      this.setState({
        selectedGenre: '',
        movies,
      });
    }
  }

  movieAdd(movie) {
    this.setState((previous) => {
      const newMovies = [...previous.movies];
      newMovies.push(movie);
      return { movies: newMovies };
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedToggle }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.movieAdd } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
