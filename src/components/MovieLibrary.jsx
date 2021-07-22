import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.titleInputCallBack = this.titleInputCallBack.bind(this);
    this.bookmarkCallBack = this.bookmarkCallBack.bind(this);
    this.selectGenreCallBack = this.selectGenreCallBack.bind(this);
    this.MovieCallBack = this.MovieCallBack.bind(this);
    this.myFilter = this.myFilter.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
    this.bookmarkedMovieFilter = this.bookmarkedMovieFilter.bind(this);
  }

  titleInputCallBack(event) {
    this.setState({ searchText: event.target.value });
  }

  bookmarkCallBack(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  selectGenreCallBack(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  MovieCallBack({ subtitle, title, imagePath, storyline, rating, genre, bookmarked }) {
    const newMovie = { subtitle, title, imagePath, storyline, rating, genre, bookmarked };
    console.log(newMovie);
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  movieFilter() {
    const { searchText, selectedGenre, movies } = this.state;
    if (selectedGenre !== '') {
      if (searchText !== '') {
        console.log(`todos os filmes
         com o genero ${selectedGenre} e o texto ${searchText}`);
        return movies.filter((movie) => movie.genre === selectedGenre)
          .filter((movie) => (
            movie.title.toLowerCase().includes(searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
          || movie.storyline.toLowerCase().includes(searchText.toLowerCase())));
      }
      console.log(`todos os filmes com o genero ${selectedGenre}`);
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      console.log(`todos os filmes com o texto ${searchText}`);
      return movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())));
    }
    console.log('todos os filmes');
    return movies;
  }

  bookmarkedMovieFilter() {
    const { searchText, selectedGenre, movies } = this.state;
    if (selectedGenre !== '') {
      if (searchText !== '') {
        console.log(`todos os filmes 
        favoritos com o genero ${selectedGenre} e o texto ${searchText}`);
        return movies.filter((movie) => movie.bookmarked === true)
          .filter((movie) => movie.genre === selectedGenre)
          .filter((movie) => (
            movie.storyline.toLowerCase().includes(searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
          || movie.title.toLowerCase().includes(searchText.toLowerCase())));
      }
      console.log(`todos os filmes favoritos com o genero ${selectedGenre}`);
      return movies.filter((movie) => movie.bookmarked === true)
        .filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      console.log(`todos os filmes favoritos com o texto ${searchText}`);
      return movies.filter((movie) => movie.bookmarked === true)
        .filter((movie) => (
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase()))));
    }
    console.log('todos os filmes favoritos');
    return movies.filter((movie) => movie.bookmarked === true);
  }

  myFilter() {
    const { searchText, selectedGenre, movies, bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      return this.bookmarkedMovieFilter();
    }
    if (!searchText || !selectedGenre) {
      return this.movieFilter();
    }
    if (searchText === '' && selectedGenre === '') {
      return movies;
    }
    return movies;
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const movies = this.myFilter();
    return (
      <div className="App">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.titleInputCallBack }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkCallBack }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectGenreCallBack }
        />
        <AddMovie
          onClick={ this.MovieCallBack }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieLibrary;
