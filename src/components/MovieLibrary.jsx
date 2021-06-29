import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div />
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
