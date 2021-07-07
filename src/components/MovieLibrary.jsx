import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      // bookmarkedOnly: false,
      selectedGenre: '',
      // movies: [...props.movies],
    };

    this.handleChange = this.handleChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value, selectedGenre: e.target.value });
  }

  render() {
    const { searchText, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={
            movies.filter((movieF) => movieF.title.includes(searchText)
            || movieF.subtitle.includes(searchText)
            || movieF.storyline.includes(searchText)
            || movieF.genre.includes(selectedGenre))
          }
        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
