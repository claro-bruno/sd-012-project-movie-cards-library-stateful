import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    return (
      <section>
        <SearchBar />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
