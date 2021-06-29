import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.textFilter = this.textFilter.bind(this);
    this.bookmarkedFilter = this.bookmarkedFilter.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (name === 'bookmarkedOnly') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        movies: (this.whatIsIt(name)),
      });
    });
  }

  textFilter(stateKey) {
    const { state } = this;
    const { movies } = this.props;
    return movies.filter((movie) => this.anybodyHas(movie, state[stateKey]));
  }

  anybodyHas({ title, subtitle, storyline }, value) {
    const have = title.toLowerCase().includes(value.toLowerCase())
      || subtitle.toLowerCase().includes(value.toLowerCase())
      || storyline.toLowerCase().includes(value.toLowerCase());
    return have;
  }

  bookmarkedFilter() {
    const { state } = this;
    const { movies } = this.props;
    if (state.bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked);
    }
    return movies;
  }

  genreFilter() {
    const { state } = this;
    const { movies } = this.props;
    if (state.selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === state.selectedGenre);
    }
    return movies;
  }

  whatIsIt(elementName) {
    switch (elementName) {
    case 'searchText':
      return this.textFilter(elementName);
    case 'bookmarkedOnly':
      return this.bookmarkedFilter();
    default:
      return this.genreFilter();
    }
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
