import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
    this.filterByBookmark = this.filterByBookmark.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.removeMovies = this.removeMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      fullList: props.movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const { state } = this;
    const value = target.type === 'checkbox' ? !state[name] : target.value;
    this.setState({ [name]: value },
      () => this.filterMovies());
  }

  filterBySearch(movies, str) {
    if (str.length !== 0) {
      return movies.filter((movie) => movie.title.toLowerCase().includes(str)
        || movie.subtitle.includes(str.toLowerCase())
        || movie.storyline.includes(str.toLowerCase()));
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
    const { searchText, bookmarkedOnly, selectedGenre, fullList } = this.state;
    const filtered1 = this.filterBySearch(fullList, searchText);
    const filtered2 = this.filterByBookmark(filtered1, bookmarkedOnly);
    const filteredMovies = this.filterByGenre(filtered2, selectedGenre);
    this.setState({ movies: filteredMovies });
  }

  addMovies(obj) {
    const { fullList } = this.state;
    this.setState({ movies: [...fullList, obj], fullList: [...fullList, obj] });
  }

  removeMovies() {
    const { props } = this;
    this.setState({ movies: props.movies, fullList: props.movies });
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
        <AddMovie onClick={ this.addMovies } />
        <button
          type="button"
          onClick={ this.removeMovies }
        >
          Voltar à lista original
        </button>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
