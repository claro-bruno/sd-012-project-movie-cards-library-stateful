import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
    this.filterByBookmark = this.filterByBookmark.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value },
      () => this.filterMovies());
  }

  onBookmarkedChange() {
    this.setState((anterior) => ({ bookmarkedOnly: !anterior.bookmarkedOnly }),
      () => this.filterMovies());
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value },
      () => this.filterMovies());
  }

  filterBySearch(movies, str) {
    if (str.length !== 0) {
      return movies.filter((movie) => movie.title.includes(str)
        || movie.subtitle.includes(str)
        || movie.storyline.includes(str));
    }
    return movies;
  }

  filterByBookmark(movies, marked) {
    if (marked === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    return movies;
  }

  filterByGenre(movies, genre) {
    if (genre.length !== 0) {
      return movies.filter((movie) => movie.genre === genre);
    }
    return movies;
  }

  filterMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filtered1 = this.filterBySearch(movies, searchText);
    const filtered2 = this.filterByBookmark(filtered1, bookmarkedOnly);
    const filteredMovies = this.filterByGenre(filtered2, selectedGenre);
    this.setState({ movies: filteredMovies });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
