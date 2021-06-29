// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return { movies };
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
