import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.addMovieToLibrary = this.addMovieToLibrary.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterBySearchText = this.filterBySearchText.bind(this);
    this.filterBookmarkedMovies = this.filterBookmarkedMovies.bind(this);
    this.filterByGenreMovies = this.filterByGenreMovies.bind(this);
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.filterBySearchText(target));
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    this.setState({
      [name]: value,
      movies,
    }, () => this.filterByGenreMovies(target));
  }

  onBookmarkedChange({ target }) {
    const { bookmarkedOnly } = this.state;
    this.setState({
      bookmarkedOnly: !bookmarkedOnly,
    }, () => this.filterBookmarkedMovies(target));
  }

  addMovieToLibrary(newMovie) {
    this.setState(({ movies }) => ({ movies: [...movies, newMovie] }));
  }

  filterBySearchText({ value }) {
    this.setState(({ movies }) => {
      const moviesByText = movies
        .filter(({ title, subtitle, storyline }) => (
          title.toLowerCase().includes(value.toLowerCase())
            || subtitle.toLowerCase().includes(value.toLowerCase())
            || storyline.toLowerCase().includes(value.toLowerCase())
        ));
      return {
        movies: moviesByText,
      };
    });
  }

  filterBookmarkedMovies(target) {
    this.setState(({ movies }) => {
      if (target.checked === true) {
        const bookmarkedMovies = movies.filter((movie) => movie.bookmarked === true);
        return {
          movies: bookmarkedMovies,
        };
      }
      return {
        movies,
      };
    });
  }

  filterByGenreMovies(target) {
    const { selectedGenre } = this.state;
    if (!selectedGenre) {
      const { movies } = this.props;
      this.setState({
        movies,
      }, () => this.filterBookmarkedMovies(target));
    } else {
      const { movies } = this.state;
      const byGenreMovies = movies.filter((movie) => movie.genre === selectedGenre);
      this.setState({
        movies: byGenreMovies,
      });
    }
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieToLibrary } />
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
