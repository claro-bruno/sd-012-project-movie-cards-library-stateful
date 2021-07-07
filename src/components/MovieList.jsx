import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.textFilter = this.textFilter.bind(this);
    this.bookmarkedFilter = this.bookmarkedFilter.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
  }

  textFilter(movies, searchText) {
    return movies.filter((movie) => Object.keys(movie).some((key) => {
      let match = false;
      if (typeof (movie[key]) !== 'number' && typeof (movie[key]) !== 'boolean') {
        match = movie[key].toLowerCase().includes(searchText.toLowerCase());
      }
      return match;
    }));
  }

  bookmarkedFilter(textFilter, bookmarkedOnly) {
    if (bookmarkedOnly === true) {
      return textFilter.filter((movie) => movie.bookmarked === true);
    }
    return textFilter;
  }

  genreFilter(filteredMovies, selectedGenre) {
    let selected = '';
    switch (selectedGenre) {
    case 'action':
      selected = filteredMovies.filter((movie) => movie.genre === 'action');
      break;
    case 'comedy':
      selected = filteredMovies.filter((movie) => movie.genre === 'comedy');
      break;
    case 'thriller':
      selected = filteredMovies.filter((movie) => movie.genre === 'thriller');
      break;
    default:
      selected = filteredMovies;
      break;
    }
    return selected;
  }

  render() {
    const { movies, filters } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = filters;
    const searchMovies = this.textFilter(movies, searchText);
    const filteredMovies = this.bookmarkedFilter(searchMovies, bookmarkedOnly);
    const selectMovies = this.genreFilter(filteredMovies, selectedGenre);
    console.log(selectMovies);
    return (
      <div data-testid="movie-list" className="movie-list">
        { selectMovies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  filters: PropTypes.shape({
    searchText: PropTypes.string,
    bookmarkedOnly: PropTypes.bool,
    selectedGenre: PropTypes.string,
  }).isRequired,
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
};
MovieList.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default MovieList;
