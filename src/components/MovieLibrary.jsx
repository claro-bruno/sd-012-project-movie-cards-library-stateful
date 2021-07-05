// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       searchText: '',
//       bookmarkedOnly: false,
//       selectedGenre: '',
//     };
//   }

  render() {
    const { movies } = this.props;
    // const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
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
