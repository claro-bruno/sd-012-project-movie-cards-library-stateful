import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies
          .filter(({ title, subtitle, storyline }) => title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText))
          .filter(({ genre }) => genre.includes(selectedGenre))
          .filter(({ bookmarked }) => !bookmarkedOnly || bookmarked)
          .map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
          ))}
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
