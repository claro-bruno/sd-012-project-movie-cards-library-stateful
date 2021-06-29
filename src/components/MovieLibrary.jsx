import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SeachBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies,
  //   };
  // }

  render() {
    return (
      <div>
        <SeachBar />
        <AddMovie />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default MovieLibrary;
