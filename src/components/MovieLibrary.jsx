import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {/* <SearchBar /> */}
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
