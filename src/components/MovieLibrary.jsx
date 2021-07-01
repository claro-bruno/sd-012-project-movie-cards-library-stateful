import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        {/* <MovieList movies={ this.props.movies } /> */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
