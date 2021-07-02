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

    this.handleChange = this.handleChange.bind(this);
    this.textFilter = this.textFilter.bind(this);
    this.bookmarkedFilter = this.bookmarkedFilter.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.runFilters = this.runFilters.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (name === 'bookmarkedOnly') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  textFilter(movies, searchText) {
    return movies.filter((movie) => this.anybodyHas(movie, searchText));
  }

  anybodyHas({ title, subtitle, storyline }, value) {
    const have = title.toLowerCase().includes(value.toLowerCase())
      || subtitle.toLowerCase().includes(value.toLowerCase())
      || storyline.toLowerCase().includes(value.toLowerCase());
    return have;
  }

  bookmarkedFilter(movies, bookmarkedOnly) {
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked);
    }
    return movies;
  }

  genreFilter(movies, selectedGenre) {
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    return movies;
  }

  runFilters() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const textResult = this.textFilter(movies, searchText);
    const markedResult = this.bookmarkedFilter(textResult, bookmarkedOnly);
    const genreResult = this.genreFilter(markedResult, selectedGenre);
    return genreResult;
  }

  addNewMovie({ title, subtitle, storyline, rating, genre, imagePath }) {
    const newMovie = { title,
      subtitle,
      storyline,
      rating: parseFloat(rating),
      genre,
      imagePath,
    };
    this.setState(({ movies }) => ({ movies: [...movies, newMovie] }));
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.runFilters() } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
