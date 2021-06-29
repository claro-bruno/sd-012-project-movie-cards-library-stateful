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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { movies } = this.props;
    /** Consultei o repositório da Diogo Sant`anna para resolver a insercao dos novos filmes do state.
       * Link do repositório https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/109 */
    this.setState({
      movies: [...movies, event],
    });
  }

  filterMovies(movies) {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    if (bookmarkedOnly === true) {
      return this.filterByBookmarkedOnly(movies);
    }
    if (selectedGenre !== '') {
      return this.filterBySelectedGenre(movies);
    }
    if (searchText !== '') {
      return this.filterBySearchText(movies);
    }
  }

  filterByBookmarkedOnly(movies) {
    return (
      <MovieList movies={ movies.filter((movie) => movie.bookmarked === true) } />
    );
  }

  filterBySelectedGenre(movies) {
    const { selectedGenre } = this.state;
    return (
      <MovieList movies={ movies.filter((movie) => movie.genre === selectedGenre) } />
    );
  }

  filterBySearchText(movies) {
    const { searchText } = this.state;
    return (
      <MovieList
        movies={ movies.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
          || movie.storyline.toLowerCase().includes(searchText.toLowerCase())) }
      />
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <div>
          {
            bookmarkedOnly === false && selectedGenre === '' && searchText === ''
              ? <MovieList movies={ movies } />
              : this.filterMovies(movies)
          }
        </div>
        <AddMovie onClick={ this.handleSubmit } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
