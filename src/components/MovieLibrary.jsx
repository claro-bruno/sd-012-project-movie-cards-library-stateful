// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const INITIAL_STATE = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.state = INITIAL_STATE;

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  // Requisito 17
  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState(() => ({ searchText: value }));
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState(() => ({ bookmarkedOnly: checked }));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState(() => ({ selectedGenre: value }));
  }

  // Requisito 18 - Ajuda monitor Daniel
  filteredBookmarked(movies) {
    const newMovies = movies.filter((movie) => movie.bookmarked);
    return newMovies;
  }

  filteredSearchtext(movies, searchText) {
    const newMovies = movies.filter((movie) => movie.title
      .toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
    return newMovies;
  }

  filteredGenre(movies, selectedGenre) {
    const newMovies = movies.filter((movie) => movie.genre === selectedGenre);
    return newMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    let { movies } = this.state;
    if (bookmarkedOnly) movies = this.filteredBookmarked(movies);
    if (searchText) movies = this.filteredSearchtext(movies, searchText);
    if (selectedGenre) movies = this.filteredGenre(movies, selectedGenre);

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />

        <MovieList movies={ movies } />
        <AddMovie onClick={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
