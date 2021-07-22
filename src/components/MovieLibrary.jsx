import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.searchOnChange = this.searchOnChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // Para resolver essa função consultei o repositório do Eder Santos
  // link: https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/74/files
  addMovie(movie) {
    this.setState((state) => {
      const { movies } = state;
      const newMovieList = [...movies, movie];
      return { movies: newMovieList };
    });
  }

  // Essa "cascata" primeiro tentei com if, a idéia das constantes é do repositório da Aldria Melo.
  // link: https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/159/files
  searchOnChange() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const arrMovie = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked === true : movie));
    const arrMovieSearch = arrMovie
      .filter((movie) => (movie.title.toLowerCase().includes(searchText)
    || movie.subtitle.toLowerCase().includes(searchText)
    || movie.storyline.toLowerCase().includes(searchText)));
    const finalMovieList = arrMovieSearch
      .filter((movie) => (movie.genre.includes(selectedGenre)));
    return finalMovieList;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.searchOnChange() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
