import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...props.movies],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  getArraysIntersection(...arrays) {
    if (arrays.length === 1) return arrays[0];
    const currentArray = arrays[0];
    const nextArray = this.getArraysIntersection(...arrays.slice(1));
    return currentArray.filter((a) => nextArray.some((b) => b === a));
  }

  getFiltersIntersection({
    searchText,
    bookmarkedOnly,
    selectedGenre,
    movies,
  }) {
    const completeMovieList = [...movies];
    let searchTextArray = [...completeMovieList];
    let bookmarkedArray = [...completeMovieList];
    let genreArray = [...completeMovieList];

    if (searchText) {
      searchTextArray = completeMovieList
        .filter(({
          title,
          subtitle,
          storyline,
        }) => title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText));
    }

    if (bookmarkedOnly) {
      bookmarkedArray = completeMovieList.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      genreArray = completeMovieList.filter(({ genre }) => genre === selectedGenre);
    }

    return this.getArraysIntersection(searchTextArray, bookmarkedArray, genreArray);
  }

  addMovie(movie) {
    this.setState((state) => {
      const { movies } = state;
      const newMovieList = [...movies, movie];

      return { movies: newMovieList };
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleInputChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleInputChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleInputChange }
        />
        <AddMovie onClick={ this.addMovie } />
        <MovieList movies={ this.getFiltersIntersection(this.state) } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
