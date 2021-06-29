// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movieList from '../data';

const defaultML = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies: movieList,
};

// prettier-ignore
class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = defaultML;
  }

  render() {
    const { movies } = this.props;
    return (
      <section>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.element.isRequired,
};

export default MovieLibrary;
