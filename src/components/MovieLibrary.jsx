// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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

  handleMovies = ({ target }) => {
    const { name, type } = target;
    const value = (type === 'checkbox' ? target.checked : target.value);
    this.setState({ [name]: value });
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <AddMovie
          onClick={ (e) => {
            this.setState((prevState) => ({ movies: [...prevState.movies, e] }));
          } }
        />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleMovies }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleMovies }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleMovies }
        />
        <MovieList
          movies={
            movies.filter((movie) => (movie.title
              .toLowerCase().includes(searchText.toLowerCase())
            || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
            || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
            && (bookmarkedOnly ? movie.bookmarked : true)
            && movie.genre.includes(selectedGenre))
          }
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
