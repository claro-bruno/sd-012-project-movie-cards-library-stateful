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
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
      this.setState({ [name]: value })
  } 

  handleClick(newMovie) {
    const { movies } = this.state;
    // const newMovie = {
    //   title,
    //   subtitle,
    //   storyline,
    //   rating,
    //   imagePath,
    //   bookmarked: false,
    //   genre,
    // };
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  handleFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let listOfFilteredMovies = movies;
    if (searchText !== '') {
      listOfFilteredMovies = listOfFilteredMovies
        .filter(({ title, subtitle, storyline }) => (
          title.includes(searchText.toLowerCase())
          || subtitle.includes(searchText.toLowerCase())
          || storyline.includes(searchText.toLowerCase())
        ));
    }

    if (bookmarkedOnly) {
      listOfFilteredMovies = listOfFilteredMovies
        .filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      listOfFilteredMovies = listOfFilteredMovies
        .filter(({ genre }) => genre === selectedGenre);
    }

    return listOfFilteredMovies;
  }

  render() {
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
        <MovieList movies={ this.handleFilter() } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
