import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

/**
 * Consultei o repositório do Luan Alexandre para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/169/commits/021d503099d85dde2fe169df26937d2c81a53331
 */

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...props.movies],
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filtersMovies = this.filtersMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  filtersMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let result = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)
    ));
    if (bookmarkedOnly) {
      result = result.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre !== '') {
      result = result.filter(({ genre }) => genre === selectedGenre);
    }
    return result;
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
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      filtersMovies,
      addMovie,
    } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ filtersMovies() } />
        <AddMovie onClick={ addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  subtitle: PropTypes.string,
  movies: PropTypes.array,
  handleChange: PropTypes.func,
}.isRequired;

export default MovieLibrary;
