import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.getState = this.getState.bind(this);
    this.filterMovie = this.filterMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  onBookmarkedChange(e) {
    this.setState({
      bookmarkedOnly: e.target.checked,
    });
  }

  onSelectedGenreChange(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }

  getState(param) {
    console.log(param);
  }

  filterMovie() {
    const {
      bookmarkedOnly,
      selectedGenre,
      searchText,
    } = this.state;
    const { movies } = this.props;
    if (selectedGenre.length > 0) {
      return movies.filter((item) => item.genre === selectedGenre);
    }
    if (searchText.length > 0) {
      return movies.filter((item) => item.title.toLowerCase()
        .includes(searchText
          .toLowerCase()))
        || movies.filter((item) => item.subtitle.toLowerCase()
          .includes(searchText
            .toLowerCase()))
        || movies.filter((item) => item.storyline.toLowerCase()
          .includes(searchText
            .toLowerCase()));
    }
    if (bookmarkedOnly === false) {
      return movies;
    }
    if (bookmarkedOnly === true) {
      return movies.filter((item) => item.bookmarked === true);
    }
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    // const { movies } = this.props;
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
        <MovieList
          movies={ this.filterMovie() }
        />
        <AddMovie
          onClick={ this.getState }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieLibrary;
