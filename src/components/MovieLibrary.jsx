import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.filterBookmark = this.filterBookmark.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.filterMovies = this.filterMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      newMovies: props.movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value },
      () => this.filterMovies());
  }

  filterSearch(movies, search) {
    if (search.length !== 0) {
      return movies.filter((movie) => movie.title.includes(search)
        || movie.subtitle.includes(search)
        || movie.storyline.includes(search));
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

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, newMovies } = this.state;
    const firstFilter = this.filterSearch(newMovies, searchText);
    const secondFilter = this.filterBookmark(firstFilter, bookmarkedOnly);
    const thirdFilter = this.filterGenre(secondFilter, selectedGenre);
    this.setState({
      movies: thirdFilter,
    });
  }

  addMovies(obj) {
    const { newMovies } = this.state;
    this.setState({
      movies: [...newMovies, obj],
      newMovies: [...newMovies, obj],
    });
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
        <br />
        <br />
        <AddMovie onClick={ this.addMovies } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
