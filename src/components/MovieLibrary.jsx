// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onClick = this.onClick.bind(this);
  }

   onClick(movie) {
   const {  } = movie
  }

  handleTextChange(event) {
    this.setState()
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={ searchText } />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick }
      />
      </div>
    );
  }
}

export default MovieLibrary;
