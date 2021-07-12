// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor({ movies }) {
    super();

    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  fetchMovies() {
    const { searchText, bookMarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    if (searchText.length > 0) {
      movies = movies
        .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    if (bookMarkedOnly) movies = movies.filter((movie) => movie.bookmarked);
    if (selectedGenre.length > 0) {
      movies = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return movies;
  }

  addMovie() {

  }

  render() {
    const moviesFiltred = this.fetchMovies();
    const { searchText, bookMarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookMarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ moviesFiltred } />

        <AddMovie onClick={ this.addMovie } />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
