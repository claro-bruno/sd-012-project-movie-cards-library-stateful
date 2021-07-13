// implement MovieLibrary component here
import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      /* bookmarkedOnly: false,
      selectedGenre: '', */
      /* movies: props.movies, */
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <section>
        <SearchBar searchText={ searchText } />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;

/* MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
}; */
