// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import movies from '../data';

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

    this.handleChanges = this.handleChanges.bind(this);
    this.filter = this.filter.bind(this);
    /* this.filterCheckbox = this.filterCheckbox.bind(this);
    this.filterSelect = this.filterSelect.bind(this); */
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filter() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    const displayArray = movies.filter((movie) => (searchText ? movie
      .title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()) : movies));

    const displayFavoriteArray = displayArray.filter((movie) => (bookmarkedOnly
      ? movie.bookmarked === bookmarkedOnly : displayArray));

    const displaySelected = displayFavoriteArray.filter((movie) => (selectedGenre
      ? movie.genre === selectedGenre : displayArray));

    return displaySelected;
  }

  addNewMovie(newMovie) {
    this.setState((prevState) => prevState.movies.push(newMovie));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChanges }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChanges }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChanges }
        />
        <MovieList
          movies={ this.filter() }
        />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
