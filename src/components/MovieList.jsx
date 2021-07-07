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

  textFilter(movies, searchText, bookmarkedOnly) {
    return movies.filter((movie) => Object.keys(movie).some((key) => {
      if(typeof(movie[key]) !== "number" && typeof(movie[key]) !== "boolean") {
        return movie[key].toLowerCase().includes(searchText.toLowerCase());
      }
    }))
  }

  bookmarkedFilter(textFilter, bookmarkedOnly) {
    if(bookmarkedOnly === true) {
      return textFilter.filter((movie) => movie.bookmarked === true);
    } else {
      return textFilter;
    }
  }

  genreFilter(filteredMovies, selectedGenre) {
    let selected = "";
    switch(selectedGenre) {
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
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.props.filters;
    const filteredMovies = this.bookmarkedFilter(this.textFilter(movies, searchText), bookmarkedOnly);
    const selectedMovies = this.genreFilter(filteredMovies, selectedGenre);
    return (
      <div data-testid="movie-list" className="movie-list">
        { selectedMovies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
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
