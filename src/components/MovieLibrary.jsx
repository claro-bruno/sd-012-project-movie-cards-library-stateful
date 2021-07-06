import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
