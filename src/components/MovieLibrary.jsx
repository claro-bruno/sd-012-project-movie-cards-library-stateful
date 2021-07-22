import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filtering = this.filtering.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox' ? target.checked : target.value);
    this.setState({
      [name]: value,
    });
  }

  // requisitos feitos com ajuda do Wadson!
  onClick(movie) {
    const { state } = this;
    const listMovie = [...state.movies, movie];
    this.setState({
      movies: listMovie,
    });
  }

  filtering() {
    const { bookmarkedOnly, selectedGenre, searchText, movies } = this.state;
    let moviesList = movies;
    if (bookmarkedOnly) {
      moviesList = movies.filter(({ bookmarked }) => bookmarked === true);
    }
    if (selectedGenre) {
      moviesList = movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (searchText) {
      moviesList = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    return moviesList;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filtering() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieLibrary;
