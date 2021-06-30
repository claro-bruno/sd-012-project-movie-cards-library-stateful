import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor({ movies }) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
      filtred: movies,
    };
  }

  onClick = (state) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  updateFunction = () => {
    const { movies, filtred, searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (searchText !== '') {
      const newAr = movies
        .filter((elm) => elm.title.toUpperCase().includes(searchText.toUpperCase())
      || elm.subtitle.toUpperCase().includes(searchText.toUpperCase())
      || elm.storyline.toUpperCase().includes(searchText.toUpperCase()));
      this.setState({
        movies: newAr,
      });
    } else {
      const { movies: realMovies } = this.props;
      this.setState({
        movies: realMovies,
      });
    }
    if (selectedGenre) {
      this.setState({
        movies: movies.filter((e) => e.genre === selectedGenre),
      });
    }
    if (bookmarkedOnly === true) {
      this.setState({
        movies: filtred.filter((e) => e.bookmarked),
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
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
