import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor({ movies }) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.searchChange = this.searchChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({ bookmarkedOnly: true }, this.filterMovies);
    } else {
      this.setState({ bookmarkedOnly: false }, this.filterMovies);
    }
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, this.filterMovies);
  }

  searchChange(event) {
    this.setState({ searchText: event.target.value }, this.filterMovies);
  }

  filterMovies() {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    const { movies } = this.props;
    let f = movies;
    if (bookmarkedOnly === true) {
      f = f.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre !== '') {
      f = f.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      if (f.filter((movie) => movie.title.includes(searchText)).length !== 0) {
        f = f.filter((movie) => movie.title.includes(searchText));
        this.setState({ movies: f });
      } else if (f.filter((movie) => movie.subtitle.includes(searchText)).length !== 0) {
        f = f.filter((movie) => movie.subtitle.includes(searchText));
        this.setState({ movies: f });
      } else {
        f = f.filter((movie) => movie.storyline.includes(searchText));
        this.setState({ movies: f });
      }
    } else {
      this.setState({ movies: f });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ () => {} } />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
