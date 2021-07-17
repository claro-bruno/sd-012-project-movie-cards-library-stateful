import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      movies: props.movies,
    };
    this.addMovieToList = this.addMovieToList.bind(this);
  }

  addMovieToList(newMovie) {
    this.setState((prevState) => ({
      ...prevState, movies: [...prevState.movies, newMovie],
    }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieToList } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieLibrary;
