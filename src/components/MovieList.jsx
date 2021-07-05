import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        <SearchBar
          searchText={ String }
          onSearchTextChange={ Function }
          bookmarkedOnly={ Boolean }
          onBookmarkedChange={ Function }
          selectedGenre={ String }
          onSelectedGenreChange={ Function }
        />
        <div data-testid="movie-list" className="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
        <AddMovie />
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
