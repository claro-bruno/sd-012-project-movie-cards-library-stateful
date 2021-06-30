// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      filteredList: props.movies,
      fullList: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  // A ideia de unir todos eventos changes e de uma foi tirada do repositorio do colega da turma 12 Luciano ALmeida
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.filterMovies());
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, fullList } = this.state;
    let movies = fullList.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText.toLowerCase())
      || movie.storyline.includes(searchText.toLowerCase()));
    if (bookmarkedOnly === true) {
      movies = movies.filter((movie) => movie.bookmarked === true);
    }
    movies = movies.filter((movie) => movie.genre.includes(selectedGenre));

    this.setState({
      filteredList: movies,
    });
  }

  addMovie(newMovie) {
    this.setState(({ fullList }) => ({
      fullList: [...fullList, newMovie],
      filteredList: [...fullList, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filteredList } = this.state;

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
        <MovieList movies={ filteredList } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
