import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <MovieList movies={ movies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
