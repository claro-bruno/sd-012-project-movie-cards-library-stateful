import React, { Component } from 'react';

import PropType from 'prop-types';
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
      searchResults: movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.sendButtonClick = this.sendButtonClick.bind(this);
  }

  onSearchTextChange(e) {
    const { value } = e.target;
    const { movies } = this.state;
    this.setState({
      searchText: value,
      searchResults: movies.filter((movie) => (
        movie.title.toLowerCase().indexOf(value) >= 0
        || movie.subtitle.toLowerCase().indexOf(value) >= 0
        || movie.storyline.toLowerCase().indexOf(value) >= 0
      )) || movies,
    });
  }

  onBookmarkedChange(e) {
    const { checked } = e.target;
    const { movies } = this.state;
    this.setState({
      bookmarkedOnly: checked,
      searchResults: checked ? movies.filter((movie) => (
        movie.bookmarked === true
      )) : movies,
    });
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    const { movies } = this.state;
    this.setState({
      selectedGenre: value,
      searchResults: value === '' ? movies
        : movies.filter((movie) => (
          movie.genre === value
        )),
    });
  }

  sendButtonClick(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
      searchResults: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, searchResults } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie
          onClick={ this.sendButtonClick }
        />
        <MovieList movies={ searchResults } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieLibrary;
