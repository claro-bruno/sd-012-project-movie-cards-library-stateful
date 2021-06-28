import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filtersMovies = this.filtersMovies.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  filtersMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesList = movies.filter(({ title, subtitle, storyline }) => (
      title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)
    ));
    if (bookmarkedOnly) {
      moviesList = moviesList.filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre !== '') {
      moviesList = moviesList.filter(({ genre }) => genre === selectedGenre);
    }
    return moviesList;
  }

  render() {
    const { onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
      filtersMovies } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ filtersMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: '',
};
