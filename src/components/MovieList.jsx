import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main className="main">
        <SearchBar searchText="" onSearchTextChange="" />
        <div data-testid="movie-list" className="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
