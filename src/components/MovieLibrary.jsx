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
      movies: [...props.movies],
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onAddNewMovie = this.onAddNewMovie.bind(this);
  }

  // Consegui esse requisito com a ajuda do David Gonzada, eu estava mexendo com o props, ao invés
  // do state.
  onAddNewMovie(newMovie) {
    this.setState((oldState) => {
      const objMovies = oldState.movies;
      objMovies.push(newMovie);
      return {
        movies: objMovies,
      };
    });
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  onBookmarkedChange(e) {
    this.setState({
      bookmarkedOnly: e.target.checked,
    });
  }

  onSelectedGenreChange(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    // O David Gonzada tinha sugerido realizar o filter nesse ponto antes de enviar os movies
    // Para o MovieList.
    if (searchText) {
      movies = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) movies = movies.filter((movie) => movie.bookmarked);
    if (selectedGenre) movies = movies.filter((movie) => movie.genre === selectedGenre);
    return (
      <form>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onAddNewMovie } />
      </form>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
