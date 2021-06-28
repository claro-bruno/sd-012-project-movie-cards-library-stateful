import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies, // É assim??
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange="xablau" // callback pra atualizar searchText
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange="xablau" // callback pra atualizar bookmarkedOnly
          selectedGenre={ selectedGenre }
          onSelectedGenreChange="xablau" // callback pra atualizar selectedGenre
        />
        <MovieList movies={ movies } />
        <AddMovie onClick="xablau" />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array.isRequired, // ??
};

export default MovieLibrary;
