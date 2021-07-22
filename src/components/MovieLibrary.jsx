import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.states = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    console.log(props);
  }

  handleClick(param) {
    console.log(param);
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
