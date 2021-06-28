import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor() {
    super();

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  render() {
    return (
      <section>
        Movie Library
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
