import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    const INITIAL_STATE = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.state = INITIAL_STATE;
  }

  updateSearch = () => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
  }

  updateBookMarked = () => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
  }

  updateGenre = () => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.updateBookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateGenre }

        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ () => { } } />
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
