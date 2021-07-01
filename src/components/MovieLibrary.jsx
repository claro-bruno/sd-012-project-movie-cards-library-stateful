// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    const { movies } = props;

    this.AddMovieClick = this.AddMovieClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleChange({ target: { name, value, type, checked } }) {
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  AddMovieClick(otherMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, otherMovie],
    });
  }

  searchMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movieSearch = movies.filter(({ title, subtitle, storyline, genre }) => (
      (title.includes(searchText) || subtitle.includes(searchText)
   || storyline.includes(searchText)) && (selectedGenre === '' || genre === selectedGenre)
    ));
    if (bookmarkedOnly) movieSearch = movieSearch.filter((movie) => movie.bookmarked);
    return movieSearch;
  }

  render() {
    const searchMovies = this.searchMovies();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSearchTextChange={ this.handleChange }
        />
        <MovieList movies={ searchMovies } />
        <AddMovie onClick={ this.AddMovieClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
