import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    const { movies } = props;

    this.handleChange = this.handleChange.bind(this);
    this.filterByBookmark = this.filterByBookmark.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.filterMovies());
  }

  onClickAdd(movie) { // Lógica implementada a partir de pesquisas do colega Eric kreis
    const { movies } = this.state;
    const moviesList = [...movies, movie];
    this.setState({
      movies: moviesList,
    });
  }

  filterMovies() {
    const { movies } = this.props;

    this.setState({
      movies,
    });

    this.filterByBookmark();
    this.filterByGenre();
    this.filterBySearch();
  }

  filterByBookmark() {
    const { bookmarkedOnly, movies: stateMovies } = this.state;

    if (bookmarkedOnly) {
      this.setState({
        movies: stateMovies.filter(({ bookmarked }) => bookmarked === true),
      });
    }
  }

  filterByGenre() {
    const { selectedGenre, movies: stateMovies } = this.state;

    if (selectedGenre !== '') {
      this.setState({
        movies: stateMovies.filter(({ genre }) => genre === selectedGenre),
      });
    }
  }

  filterBySearch() {
    const { searchText, movies: stateMovies } = this.state;

    if (searchText !== '') {
      this.setState({
        movies: stateMovies.filter(({ title, subtitle, storyline }) => (
          title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)
        )),
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: stateMovies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ stateMovies } />
        <AddMovie onClick={ this.onClickAdd } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
