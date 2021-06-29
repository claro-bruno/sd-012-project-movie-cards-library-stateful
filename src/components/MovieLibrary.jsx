import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { searchText,
      bookmarkedOnly,
      selectedGenre,
      movies
    } = this.state;

    const { movies } = this.props;
    return (
      <section>
        <SearchBar />
        <AddMovie />
      </section>
    );
  }
}



export default MovieLibrary;
