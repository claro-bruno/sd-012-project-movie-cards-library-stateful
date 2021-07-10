import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.searchTextUpdate = this.searchTextUpdate.bind(this);
    this.bookmarkedUpdate = this.bookmarkedUpdate.bind(this);
    this.selectedGenreUpdate = this.selectedGenreUpdate.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  searchTextUpdate(event) {
    const { value } = event.target;
    const { props } = this;
    const { movies } = props;
    const filter = movies
      .filter((item) => item.title.includes(value)
        || item.subtitle.includes(value)
        || item.storyline.includes(value));
    if (value === '') {
      this.setState({
        searchText: value,
        movies,
      });
    } else {
      this.setState({
        searchText: value,
        movies: filter,
      });
    }
  }

  bookmarkedUpdate(event) {
    const checkStatus = event.target.checked;
    const { props } = this;
    const { movies } = props;
    const filter = movies.filter((item) => item.bookmarked);
    if (checkStatus) {
      this.setState({
        bookmarkedOnly: checkStatus,
        movies: filter,
      });
    } else {
      this.setState({
        bookmarkedOnly: checkStatus,
        movies,
      });
    }
  }

  selectedGenreUpdate(event) {
    const { value } = event.target;
    const { props } = this;
    const { movies } = props;
    const filter = movies.filter((item) => item.genre === value);
    if (value === '') {
      this.setState({
        selectedGenre: value,
        movies,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies: filter,
      });
    }
  }

  addMovie(newMovie) {
    this.setState((originalState) => ({
      movies: [...originalState.movies, newMovie],
    }));
  }

  // O projeto do Guilherme Hermenegildo me ajudou na ideia de como fazer os filtros: https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/50/files

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchTextUpdate }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedUpdate }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreUpdate }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
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
