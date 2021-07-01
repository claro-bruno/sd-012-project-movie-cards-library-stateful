import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.filterSearch = this.filterSearch.bind(this);
    this.filterBookmark = this.filterBookmark.bind(this);
    this.filterGenre = this.filterGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  filterSearch(movies, str) {
    if (str.length !== 0) {
      return movies.filter((movie) => movie.title.toLowerCase().includes(str)
        || movie.subtitle.includes(str.toLowerCase())
        || movie.storyline.includes(str.toLowerCase()));
    }
    return movies;
  }

  filterBookmark(movies, marked) {
    if (marked === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    return movies;
  }

  filterGenre(movies, genre) {
    if (genre.length !== 0) {
      return movies.filter((movie) => movie.genre === genre);
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
// somente iniciei o requisito 17 e 18, dúvidas para realizar
