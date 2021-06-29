import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.myOnChange = this.myOnChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  myOnChange(target) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  searchText({ title, subtitle, storyline }, searchText) {
    return title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText);
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movie))
      .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : movie))
      .filter((movie) => (searchText ? this.searchText(movie, searchText) : movie));
  }

  render() {
    const { searchText, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.myOnChange }
          onBookmarkedChange={ this.myOnChange }
          onSelectedGenreChange={ this.myOnChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array.isRequired,
}.isRequired;

export default MovieLibrary;
