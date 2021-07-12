import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};
export default MovieLibrary;
