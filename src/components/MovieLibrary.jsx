// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(e) {
    const textFilter = e.target.value;
    const { movies } = this.state;
    this.setState({
      movies: movies.filter((movie) => movie.title.includes(textFilter)),
      searchText: textFilter,
    });
  }

  onBookmarkedChange(e) {
    const bookmarkedFilter = e.target.checked;
    const { movies } = this.state;
    this.setState({
      movies: movies.filter((movie) => movie.bookmarked === bookmarkedFilter),
      bookmarkedOnly: bookmarkedFilter,
    });
  }

  onSelectedGenreChange(e) {
    const genreFilter = e.target.value;
    const { movies } = this.state;
    this.setState({
      movies: movies.filter((movie) => movie.genre === genreFilter),
      selectedGenre: genreFilter,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
