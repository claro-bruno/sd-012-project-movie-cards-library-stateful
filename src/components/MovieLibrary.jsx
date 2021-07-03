// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: 'Todos',
    };
  }

  handleMovies = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <AddMovie onClick={ () => console.log('AddMovie') } />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleMovies }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleMovies }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleMovies }
        />
        <MovieList movies={ movies } />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
