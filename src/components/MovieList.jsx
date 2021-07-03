import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     inputValue: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   this.setState({ inputValue: e.target.value });

  // }

  render() {
    const { movies } = this.props;
    // const { inputValue } = this.state;
    return (
      <div data-testid="movie-list" className="movie-list">
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
