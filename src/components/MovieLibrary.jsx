import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './searchBar/SearchBar';
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
      filteredMovies: JSON.parse(localStorage.getItem('movies')) || movies,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilteredMovies = this.handleFilteredMovies.bind(this);
    this.handleResetMovies = this.handleResetMovies.bind(this);
  }

  handleClick(state) {
    const { title, subtitle, imagePath, storyline } = state;
    if (title && subtitle && imagePath && storyline) {
      this.setState((prevState) => ({
        filteredMovies: [...prevState.filteredMovies, state],
      }), () => {
        const { filteredMovies } = this.state;
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
      });
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
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    let filteredMovies = JSON.parse(localStorage.getItem('movies')) || movies;
    if (searchText !== '') {
      filteredMovies = filteredMovies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }
    this.setState({
      filteredMovies,
    });
  }

  handleResetMovies() {
    const { movies } = this.state;
    this.setState({
      filteredMovies: movies,
    }, () => {
      const { filteredMovies } = this.state;
      localStorage.setItem('movies', JSON.stringify(filteredMovies));
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredMovies } = this.state;
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
        <MovieList movies={ filteredMovies } />
        <button type="reset" onClick={ this.handleResetMovies }> Resetar movies</button>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
