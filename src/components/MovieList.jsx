import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies/* , searchByText, checkBox, genreSelected */ } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired, /*
  searchByText: PropTypes.string.isRequired,
  checkBox: PropTypes.bool.isRequired,
  genreSelected: PropTypes.string.isRequired, */
};

export default MovieList;
