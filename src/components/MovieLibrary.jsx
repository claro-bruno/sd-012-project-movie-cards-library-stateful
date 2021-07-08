import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value,
      selectedGenre: e.target.value });
  }

  onBookmarkedChange(e) {
    this.setState({ bookmarkedOnly: e.target.value });
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          bookmarked={ bookmarkedOnly }
        />
        <MovieList
          movies={
            movies.filter((movieF) => movieF.title.includes(searchText)
            || movieF.subtitle.includes(searchText)
            || movieF.storyline.includes(searchText)
            || movieF.genre.includes(selectedGenre))
            || movies.filter((favo) => favo.bookmarked.includes(bookmarkedOnly))
          }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

export default MovieLibrary;
