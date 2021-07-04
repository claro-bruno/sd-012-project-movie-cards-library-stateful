import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.filterByText = this.filterByText.bind(this);
    this.filterByBookmarked = this.filterByBookmarked.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      moviesUpdate: props.movies,
    };
  }

  handleChange({ target }) {
    const { name, value, type } = target;
    const { state } = this;
    const verifiedValue = type === 'checkbox' ? !state[name] : value;
    this.setState({
      [name]: verifiedValue,
    }, () => this.filterMovies());
  }

  filterByText(movies, search) {
    if (search.length > 0) {
      return movies.filter((movie) => movie.title.toLowerCase().includes(search)
        || movie.subtitle.toLowerCase().includes(search.toLowerCase())
        || movie.storyline.toLowerCase().includes(search.toLowerCase()));
    }
    return movies;
  }

  filterByBookmarked(movies, bookmarked) {
    if (bookmarked) return movies.filter((movie) => movie.bookmarked === true);
    return movies;
  }

  filterByGenre(movies, genre) {
    if (genre.length > 0) return movies.filter((movie) => movie.genre === genre);
    return movies;
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, moviesUpdate } = this.state;
    let filtered = this.filterByText(moviesUpdate, searchText);
    filtered = this.filterByBookmarked(filtered, bookmarkedOnly);
    filtered = this.filterByGenre(filtered, selectedGenre);
    this.setState({
      movies: filtered,
    });
  }

  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      < >
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </>
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
