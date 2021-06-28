import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { props } = this;
    const { movies } = props;
    const movieFilter = movies
      .filter((movie) => movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value));
    if (value !== '') {
      this.setState({
        searchText: value,
        movies: movieFilter,
      });
    } else {
      this.setState({
        searchText: value,
        movies,
      });
    }
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { props } = this;
    const { movies } = props;
    const movieFilter = movies.filter((movie) => movie.bookmarked);
    if (checked) {
      this.setState({
        bookmarkedOnly: checked,
        movies: movieFilter,
      });
    } else {
      this.setState({
        bookmarkedOnly: checked,
        movies,
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { props } = this;
    const { movies } = props;
    const movieFilter = movies.filter((movie) => movie.genre === value);
    console.log(value);
    if (value !== '') {
      this.setState({
        selectedGenre: value,
        movies: movieFilter,
      });
    } else {
      this.setState({
        selectedGenre: value,
        movies,
      });
    }
  }

  onClick(objeto) {
    console.log(objeto);
  }

  render() {
    const { state } = this;
    return (
      <div>
        <SearchBar
          searchText={ state.searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ state.bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ state.selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ state.movies } />
        <AddMovie onClick={ this.onClick } />
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
