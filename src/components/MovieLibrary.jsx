import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.submitOnClick = this.submitOnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filtering = this.filtering.bind(this);
    // this.handleSearchText = this.handleSearchText.bind(this);
    // this.handlebookmarkedOnly = this.handlebookmarkedOnly.bind(this);
    // this.handleSelectedGenre = this.handleSelectedGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  // handleSearchText(event) {
  //   this.setState({ searchText: event.target.value });
  // }

  // handlebookmarkedOnly(event) {
  //   this.setState({ searchText: event.target.value });
  // }

  // handleSelectedGenre(event) {
  //   this.setState({ searchText: event.target.value });
  // }

  // handleChange({ target }) {
  //   const { name, value } = target;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox' ? target.checked : target.value);

    this.setState({
      [name]: value,
    });
  }

  // Eu verifiquei a o PR do Eric Kreis para resolução da função de filtragem para os requisitos 17 e 18.
  // https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/61/files

  filtering() {
    const { bookmarkedOnly, selectedGenre, searchText, movies } = this.state;
    let moviesList = movies;

    if (bookmarkedOnly) {
      moviesList = movies.filter(({ bookmarked }) => bookmarked === true);
    }
    if (selectedGenre) {
      moviesList = movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (searchText) {
      moviesList = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    return moviesList;
  }

  submitOnClick(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filtering() } />
        <AddMovie onClick={ () => {} } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieLibrary;
