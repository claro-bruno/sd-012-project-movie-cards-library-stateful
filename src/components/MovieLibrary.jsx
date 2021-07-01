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
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookMarkedOnlyChange = this.onBookMarkedOnlyChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    this.setState(() => ({
      [name]: value,
      movies: movies.filter((movie) => movie.title.includes(value)
      || movie.subtitle.includes(value) || movie.storyline.includes(value)),
    }));
  }

  onBookMarkedOnlyChange({ target }) {
    const { name, checked } = target;
    const { movies } = this.props;
    if (checked) {
      this.setState(() => ({
        [name]: checked,
        movies: movies.filter((movie) => movie.bookmarked),
      }));
    } else {
      this.setState(() => ({
        [name]: checked,
        movies,
      }));
    }
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    if (value !== '') {
      this.setState(() => ({
        [name]: value,
        movies: movies.filter((movie) => movie.genre === value),
      }));
    } else {
      this.setState(() => ({
        [name]: value,
        movies,
      }));
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookMarkedOnlyChange={ this.onBookMarkedOnlyChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie movies={ movies } />
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
