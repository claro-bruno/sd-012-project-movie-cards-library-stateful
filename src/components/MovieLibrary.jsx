// implement MovieLibrary component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

// const INITIAL_STATE = {
//   searchText: '',
//   bookmarkedOnly: false,
//   selectedGenre: '',
//   movies: '',
// };

export default class MovieLibrary extends Component {
  render() {
    // const { movies } = this.props;
    return (
      <div>
        {/* { movies } */}
        <SearchBar />
        {/* <MovieList /> */}
        <AddMovie /* onClick={ } */ />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
