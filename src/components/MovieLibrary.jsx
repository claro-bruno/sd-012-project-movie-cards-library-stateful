import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

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
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilteredMovies = this.handleFilteredMovies.bind(this);
  }

  handleClick(state) {
    const { title, subtitle, imagePath, storyline } = state;
    if (title || subtitle || imagePath || storyline) {
      this.setState((prevState) => ({
        movies: [...prevState.movies, state],
      }));
    } else { alert('Nao foi possivel adicionar o filme'); }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleFilteredMovies());
  }

  handleFilteredMovies() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    let { movies } = this.state;

    if (searchText !== '') {
      movies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }

    if (bookmarkedOnly) {
      movies = movies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      movies = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <AddMovie onClick={ this.handleClick } />
        <MovieList movies={ this.handleFilteredMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
