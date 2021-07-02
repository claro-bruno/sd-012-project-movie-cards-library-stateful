// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.filterSearchBar = this.filterSearchBar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filterSearchBar() {
    const {
      movies,
      bookmarkedOnly,
      selectedGenre,
      searchText,
    } = this.state;
    const filmesFiltrados = movies.filter((movie) => movie.bookmarked);
    const resultadoFavorito = bookmarkedOnly ? filmesFiltrados : movies;
    const resultadoGender = resultadoFavorito
      .filter((movie) => movie.genre === selectedGenre);
    const verificaGender = selectedGenre === '' ? resultadoFavorito : resultadoGender;
    const resultadoFilterWord = verificaGender
      .filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    return resultadoFilterWord;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    const {
      handleChange,
      filterSearchBar,
    } = this;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ filterSearchBar() } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string,
}.isRequired;

export default MovieLibrary;
