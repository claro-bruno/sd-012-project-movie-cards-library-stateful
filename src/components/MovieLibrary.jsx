import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor({ movies }) {
    super(movies);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      filtred: movies,
    };
  }

  onClick = () => {
  }

  updateFunction = () => {
    const { movies, filtred, searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (searchText !== '') {
      const newAr = movies
        .filter((elm) => elm.title.toUpperCase().includes(searchText.toUpperCase())
      || elm.subtitle.toUpperCase().includes(searchText.toUpperCase())
      || elm.storyline.toUpperCase().includes(searchText.toUpperCase()));
      this.setState({
        filtred: newAr,
      });
    } else {
      this.setState({
        filtred: movies,
      });
    }
    if (selectedGenre) {
      this.setState({
        filtred: movies.filter((e) => e.genre === selectedGenre),
      });
    }
    if (bookmarkedOnly === true) {
      this.setState({
        filtred: filtred.filter((e) => e.bookmarked),
      });
    }
  }

  onBookmarkedChange = ({ target }) => {
    const { checked, name } = target;
    this.setState({
      [name]: checked,
    }, () => this.updateFunction());
  }

  onSearchTextChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.updateFunction());
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    }, () => this.updateFunction());
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filtred } = this.state;
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
        <MovieList movies={ filtred } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
