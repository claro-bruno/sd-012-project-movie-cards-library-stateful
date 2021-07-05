import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovieFunc = this.addMovieFunc.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const inputText = searchText.toLowerCase();
    return movies
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => !bookmarkedOnly || movie.bookmarked)
      .filter((movie) => (
        movie.title.toLowerCase().includes(inputText)
        || movie.subtitle.toLowerCase().includes(inputText)
        || movie.storyline.toLowerCase().includes(inputText)
      ));
  }

  addMovieFunc() {
    console.log('addMovieFunc');
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ this.filterMovies(movies) }
        />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
