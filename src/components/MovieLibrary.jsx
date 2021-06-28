import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterBookmarkedMovies = this.filterBookmarkedMovies.bind(this);
    this.filterByGenreMovies = this.filterByGenreMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onSearchTextChange({ target }) {
    this.handleChange(target);
  }

  onSelectedGenreChange({ target }) {
    this.handleChange(target);
    this.filterByGenreMovies();
  }

  onBookmarkedChange({ target }) {
    const { bookmarkedOnly } = this.state;
    this.setState({
      bookmarkedOnly: !bookmarkedOnly,
    }, () => this.filterBookmarkedMovies(target));
  }

  filterBookmarkedMovies(target) {
    if (target.checked === true) {
      const { movies } = this.state;
      const bookmarkedMovies = movies.filter((movie) => movie.bookmarked === true);
      this.setState({
        movies: bookmarkedMovies,
      });
    }
  }

  filterByGenreMovies() {
    const { movies, selectedGenre } = this.state;
    const byGenreMovies = movies.filter((movie) => movie.genre === selectedGenre);
    this.setState({
      movies: byGenreMovies,
    });
  }


  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        {/* <MovieList movies={ movies } /> */}
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieLibrary;
