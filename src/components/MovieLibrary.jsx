import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import './styles.css';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    const INITIAL_STATE = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.state = INITIAL_STATE;
    this.addMovie = this.addMovie.bind(this);
  }

  updateSearch = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  updateBookMarked = ({ target }) => {
    const { name, checked } = target;
    this.setState({
      [name]: checked,
    });
  }

  updateGenre = ({ target }) => {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (searchText) {
      return movies.filter(({ title, subtitle, storyline }) => (
        title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        || subtitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        || storyline.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      ));
    }
    if (bookmarkedOnly) {
      return movies.filter(({ bookmarked }) => bookmarked === true);
    }
    if (selectedGenre) {
      return movies.filter(({ genre }) => genre === selectedGenre);
    }
    return movies;
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState(() => ({ movies: [...movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.updateBookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateGenre }

        />
        <MovieList movies={ this.filter() } />
        <AddMovie onClick={ this.addMovie } />
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
