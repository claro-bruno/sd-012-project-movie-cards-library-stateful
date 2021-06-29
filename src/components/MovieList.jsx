import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, inputValue } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        <p>Teste: <span>{inputValue}</span></p>
        {/* { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) } */}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
