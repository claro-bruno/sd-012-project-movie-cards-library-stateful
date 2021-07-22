// implement MovieLibrary component here
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
    this.getFilteredMovies = this.getFilteredMovies.bind(this);
  }

  getFilteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredByBookmarked = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies));
    const filteredBySearchText = filteredByBookmarked
      .filter((movie) => movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    const filteredByGenre = filteredBySearchText
      .filter((movie) => (selectedGenre === '' ? movies : movie.genre === selectedGenre));
    return filteredByGenre;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={
            ({ target }) => this.setState({ searchText: target.value })
          }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={
            ({ target }) => this.setState({ bookmarkedOnly: target.value })
          }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={
            ({ target }) => this.setState({ selectedGenre: target.value })
          }
        />
        <MovieList movies={ this.getFilteredMovies() } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;
