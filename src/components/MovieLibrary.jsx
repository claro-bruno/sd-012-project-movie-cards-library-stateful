import React, { Component } from 'react';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies:
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
