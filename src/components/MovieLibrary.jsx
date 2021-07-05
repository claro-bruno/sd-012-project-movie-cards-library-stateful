import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.movies = props.movies;
    this.initialState = {
      searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      // movies: this.movies,
    };
    this.state = this.initialState;
    // this.movies = movies;
  }

  render() {
    return (
      <div>
        <span>MovieLibrary Component</span>
        <SearchBar
          searchText={ this.searchText }
          bookmarkedOnly={ this.bookmarkedOnly }
          selectedGenre={ this.selectedGenre }
          movies={ this.movies }
        />
        <MovieList movies={ this.movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
