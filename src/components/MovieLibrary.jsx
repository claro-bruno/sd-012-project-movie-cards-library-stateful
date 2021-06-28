// implement MovieLibrary component here
import React, { Component } from 'react';

const initialState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies,
};

export class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = initialState;
  }

  render() {
    return (
      <div />
    );
  }
}

export default MovieLibrary;
