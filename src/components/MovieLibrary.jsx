import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...props.movies],
    };
  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  handleOnClick = (state) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  filterMovies = () => {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (movies.filter((movie) => (
      (movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
      && (bookmarkedOnly ? movie.bookmarked : true)
      && movie.genre.includes(selectedGenre))));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={ this.filterMovies() } />
        <AddMovie
          onClick={ this.handleOnClick }
        />
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
