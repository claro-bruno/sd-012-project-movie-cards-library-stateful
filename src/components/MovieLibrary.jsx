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
      addedMovies: [],
    };

    this.handleChangeInSearchBar = this.handleChangeInSearchBar.bind(this);
    this.filteredMovies = this.filterMovies.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.filterByBookmarked = this.filterByBookmarked.bind(this);
    this.filterBySearchText = this.filterBySearchText.bind(this);
    this.addMovieToLibrary = this.addMovieToLibrary.bind(this);
  }

  handleChangeInSearchBar({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.filterMovies());
  }

  filterByGenre(movies, genre) {
    return movies.filter((movie) => movie.genre === genre);
  }

  filterByBookmarked(movies, bookmarked) {
    return movies.filter((movie) => movie.bookmarked === bookmarked);
  }

  filterBySearchText(movies, input) {
    return movies
      .filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(input.toLowerCase())
        || subtitle.toLowerCase().includes(input.toLowerCase())
        || storyline.toLowerCase().includes(input.toLowerCase())
      ));
  }

  addMovieToLibrary(newMovie) {
    this.setState(({ addedMovies }) => ({
      addedMovies: [...addedMovies, newMovie],
    }), () => {
      const { movies } = this.state;
      this.setState({
        movies: [...movies, newMovie],
      });
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, addedMovies } = this.state;
    const { movies } = this.props;

    let copyMovies = [...movies, ...addedMovies];

    if (selectedGenre) copyMovies = this.filterByGenre(copyMovies, selectedGenre);

    if (bookmarkedOnly) copyMovies = this.filterByBookmarked(copyMovies, bookmarkedOnly);

    if (searchText) copyMovies = this.filterBySearchText(copyMovies, searchText);

    this.setState({
      movies: copyMovies,
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
          onSearchTextChange={ this.handleChangeInSearchBar }
          onBookmarkedChange={ this.handleChangeInSearchBar }
          onSelectedGenreChange={ this.handleChangeInSearchBar }
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
