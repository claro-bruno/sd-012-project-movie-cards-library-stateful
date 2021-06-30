import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  filterMovies(movies) {
    const { bookmarkedOnly: marked, selectedGenre: genre, searchText } = this.state;

    const search = movies.filter((movie) => {
      const check = (movie.title.toLowerCase()
        .includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
      return check;
    });

    const favorite = marked ? search.filter((movie) => (movie.bookmarked)) : search;

    const result = genre ? favorite.filter((movie) => movie.genre === genre) : favorite;

    return result;
  }

  addMovie(movie) {
    const { movies } = this.props;
    this.setState({ movies: [...movies, movie] });
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
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />

        <MovieList movies={ this.filterMovies(movies) } />

        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
