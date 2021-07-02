import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    // console.log(this.props);

    this.addMovie = this.addMovie.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    // console.log(this);
  }

  onChangeHandle({ target }) {
    const { id, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [id]: value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return movies.filter((movie) => (
      movie.title
        .toLowerCase()
        .includes(searchText.toLowerCase())
        || movie.subtitle
          .toLowerCase()
          .includes(searchText.toLowerCase())
        || movie.storyline
          .toLowerCase()
          .includes(searchText.toLowerCase())))
      .filter((movie) => !bookmarkedOnly || movie.bookmarked)
      .filter((movie) => selectedGenre === '' || movie.genre === selectedGenre);
  }

  addMovie(newMovie) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const filteredMovies = this.filterMovies();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onChangeHandle }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onChangeHandle }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onChangeHandle }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
