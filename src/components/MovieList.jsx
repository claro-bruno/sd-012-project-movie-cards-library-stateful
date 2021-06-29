import React from 'react';
/* import PropTypes from 'prop-types'; */
import SearchBar from './SearchBar';
/* import MovieCard from './MovieCard'; */

class MovieList extends React.Component {
  render() {
    /* const { movies } = this.props; */

    return (
      <div data-testid="movie-list">
        <SearchBar />
        {/* movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) */}
      </div>
    );
  }
}

/* MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
}; */

export default MovieList;
