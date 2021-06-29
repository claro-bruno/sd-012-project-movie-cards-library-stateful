import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: props.movies, // ainda nao tenho certeza se esta certo
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.filterByBookmarkedOnly = this.filterByBookmarkedOnly.bind(this);
    this.filterBySelectedGenre = this.filterBySelectedGenre.bind(this);
    this.filterBySearchText = this.filterBySearchText.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filterMovies() {
    const { bookmarkedOnly, selectedGenre, searchText } = this.state;
    const { movies } = this.props;
    if (bookmarkedOnly === false && selectedGenre === '' && searchText === '') {
      return <MovieList movies={ movies } />;
    }
    if (bookmarkedOnly === true) {
      return this.filterByBookmarkedOnly(movies);
    }
    if (selectedGenre !== '') {
      return this.filterBySelectedGenre(movies);
    }
    if (searchText !== '') {
      return this.filterBySearchText(movies);
    }
  }

  filterByBookmarkedOnly(movies) {
    return <MovieList movies={ movies } />;
  }

  filterBySelectedGenre(movies) {
    const { selectedGenre } = this.state;
    return (
      <MovieList movies={ movies.filter((movie) => movie.genre === selectedGenre) } />
    );
  }

  filterBySearchText(movies) {
    const { searchText } = this.state;
    return (
      <MovieList
        movies={ movies.filter((movie) => movie.title.includes(searchText)
          || movie.subtitle.includes(searchText)
          || movie.storyline.includes(searchText)) }
      />
    );
  }

  render() {
    // const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <div>
          {this.filterMovies()}
        </div>

        {/* <AddMovie onClick="xablau" // callback que permite adicionar um novo filme ao final da lista
        /> */}
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
