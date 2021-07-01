import React, { Component } from 'react';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies
    };
  }

  render() {
    return (
      <div>
        <h1>Placeholder</h1>
      </div>
    )
  }
}

export default MovieLibrary;
