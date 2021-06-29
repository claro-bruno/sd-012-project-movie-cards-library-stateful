import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.AddMovie = this.AddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onBookmarkedChange = ({ target }) => {
    const { movies } = this.props;

    this.setState({ bookmarkedOnly: target.checked }, () => {
      if (target.checked) {
        this.setState({
          movies: movies.filter((movie) => movie.bookmarked === true),
        });
      } else {
        this.setState({
          movies,
        });
      }
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const { movies } = this.props;

    this.setState({ selectedGenre: target.value }, () => {
      if (target.value === '') {
        this.setState({
          movies,
        });
      } else {
        this.setState({
          movies: movies.filter((movie) => movie.genre === target.value),
        });
      }
    });
  }

  onSearchTextChange({ target }) {
    const { movies } = this.props;

    this.setState({ searchText: target.value }, () => {
      this.setState({
        movies: movies
          .filter(({ title, subtitle, storyline }) => (
            title.toLowerCase().includes(target.value)
            || subtitle.toLowerCase().includes(target.value)
            || storyline.toLowerCase().includes(target.value)
          )),
      });
    });
  }

  AddMovie(state) {
    const { movies } = this.state;

    state.rating = Number(state.rating);
    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div className="mt-3">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.AddMovie } />
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
