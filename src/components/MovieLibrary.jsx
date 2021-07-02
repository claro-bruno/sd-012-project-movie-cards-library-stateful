import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.addMovieToArr = this.addMovieToArr.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  onBookmarkedChange() {
    this.setState((prev) => ({ bookmarkedOnly: !prev.bookmarkedOnly }));
  }

  onSelectedGenreChange(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }

  filteredMovies() {
    let { movies, searchText } = this.state;
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

  addMovieToArr(newMovie) {
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList
          movies={ this.filteredMovies() }
        />
        <AddMovie addMovieToArr={ this.addMovieToArr } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
