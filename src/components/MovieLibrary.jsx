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
      movies: props.movies, // É assim??
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText="xablau"
          onSearchTextChange="xablau"
          bookmarkedOnly="xablau"
          onBookmarkedChange="xablau"
          selectedGenre="xablau"
          onSelectedGenreChange="xablau"
        />
        <MovieList movies={ movies } />
        <AddMovie onClick="xablau" />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array.isRequired, // ??
};

export default MovieLibrary;
