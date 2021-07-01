import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.stateDefault = this.stateDefault.bind(this);
    this.filterMovies = this.filterMovies.bind(this);

    this.state = this.stateDefault();
  }

  handleAddMovie(stateAddMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, stateAddMovie],
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    const filterSearchText = movies
      .filter((movie) => (
        movie.title.toLowerCase()
          .includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase()
          .includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase()
          .includes(searchText.toLowerCase())
      ));

    const filterBookmarkedOnly = bookmarkedOnly
      ? filterSearchText.filter((movie) => movie.bookmarked === true)
      : filterSearchText;

    const filterSelectedGenre = selectedGenre !== ''
      ? filterBookmarkedOnly.filter((movie) => movie.genre === selectedGenre)
      : filterBookmarkedOnly;

    return filterSelectedGenre;
  }

  stateDefault() {
    const { movies } = this.props;
    return {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { handleChange, handleAddMovie } = this;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ handleChange }
          onBookmarkedChange={ handleChange }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ this.filterMovies } />
        <AddMovie onClick={ handleAddMovie } />
      </section>

    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
