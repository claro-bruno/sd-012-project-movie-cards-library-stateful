import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(state) {
    console.log(state);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar />
        <AddMovie onClick={ this.handleClick } />
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.id } />)}
        { searchText }
        { bookmarkedOnly }
        {selectedGenre}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
