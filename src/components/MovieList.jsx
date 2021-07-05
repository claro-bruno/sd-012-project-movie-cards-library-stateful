import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        <SearchBar
          searchText={ String }
          onSearchTextChange={ () => {} }
          bookmarkedOnly={ Boolean }
          onBookmarkedChange={ callback }
          selectedGenre={ String }
          onSelectedGenreChange={ callback }
        />
        <div data-testid="movie-list" className="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
