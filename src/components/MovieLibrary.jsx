import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleSearchBar = this.handleSearchBar.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);
  }

  handleSearchBar(event) {
    const { name, type } = event.target;
    const value = (type === 'checkbox') ? event.target.checked : event.target.value;
    this.setState({ [name]: value });
  }

  handleNewMovie(movie) {
    const { state } = this;
    const newMovie = [...state.movies, movie];
    this.setState({ movies: newMovie });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let moviesFiltered = movies;

    if (bookmarkedOnly) {
      moviesFiltered = movies.filter(({ bookmarked }) => bookmarked === true);
    }
    if (selectedGenre) {
      moviesFiltered = movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (searchText) {
      moviesFiltered = movies.filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(searchText.toLowerCase())
        || subtitle.toLowerCase().includes(searchText.toLowerCase())
        || storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }

    return moviesFiltered;
  }

  render() {
    const { filterMovies, handleSearchBar, handleNewMovie } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ handleSearchBar }
          onSelectedGenreChange={ handleSearchBar }
          onBookmarkedChange={ handleSearchBar }
        />
        <MovieList movies={ filterMovies() } />
        <AddMovie onClick={ handleNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;
