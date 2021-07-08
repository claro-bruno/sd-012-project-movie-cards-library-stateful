import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.filterChecked = this.filterChecked.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  filterChecked({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovies(newMovie) {
    this.setState((lastState) => ({
      movies: [...lastState.movies, newMovie],
    }));
  }

  filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let array = movies;
    if (bookmarkedOnly === true) {
      array = movies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      array = movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      array = movies.filter((movie) => movie
        .title.toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));
    }
    return array;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h1> Movie Library </h1>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterChecked }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.filterChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.filterChecked }
        />
        <MovieList movies={ this.filterMovie() } />
        <AddMovie onClick={ this.addMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf((PropTypes.object).isRequired),
};

MovieLibrary.defaultProps = {
  movies: {},
};
