import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

import '../styles/movielist.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieList;
