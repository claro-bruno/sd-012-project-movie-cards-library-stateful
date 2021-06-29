import React, { Component } from 'react';

class MovieLibrary extends Component {
  constructor() {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: this.props.movies,
    }
  }
  render() {
    return ();
  }
}

export default MovieLibrary;
