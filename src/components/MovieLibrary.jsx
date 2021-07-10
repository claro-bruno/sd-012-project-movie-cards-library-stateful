import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handlerChange = this.handlerChange.bind(this);
    this.handlerFilter = this.handlerFilter.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handlerFilter() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filterMovies = movies;
    if (searchText) {
      filterMovies = movies.filter((movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }
    if (bookmarkedOnly) {
      filterMovies = filterMovies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre) {
      filterMovies = filterMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return filterMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { handlerFilter } = this;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handlerChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handlerChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handlerChange }
        />
        <MovieList movies={ handlerFilter() } />
        <AddMovie onClickAdd={ this.onClickAdd } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
