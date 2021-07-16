// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState((state) => ({
      ...state,
      searchText: value,
    }));
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState((state) => ({
      ...state,
      bookmarkedOnly: checked,
    }));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState((state) => ({
      ...state,
      selectedGenre: value,
    }));
  }

  onClick(addMovie) {
    const { movies } = this.state;
    this.setState(() => ({
      movies: [...movies, addMovie],
    }));
    console.log(addMovie);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(movies);
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    {},
  ).isRequired,
};
