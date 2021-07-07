import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  //   constructor() {
  //   super();
  //   this.state = {
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     searchText: '',
  //   };
  // }
  // constructor(props) {
  //   super(props);
  // }
  // adicionar()
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ String }
          onSearchTextChange={ Function }
          bookmarkedOnly={ Boolean }
          onBookmarkedChange={ Function }
          selectedGenre={ String }
          onSelectedGenreChange={ Function }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ Function } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
