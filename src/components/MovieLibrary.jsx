// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const INITIAL_STATE = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.state = INITIAL_STATE;

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filtered = this.filtered.bind(this);
  }

  // handleChange({ target }) {
  //   this.setState({
  //     [target.name]: target.type === 'checkbox' ? target.checked : target.value,
  //   });
  // }
  onSearchTextChange({ target }) {
    this.setState(() => ({ searchText: target.value }));
  }

  onBookmarkedChange({ target }) {
    this.setState(() => ({ bookmarkedOnly: target.checked }));
  }

  onSelectedGenreChange({ target }) {
    this.setState(() => ({ selectedGenre: target.value }));
  }

  // Requisito 18 - Ajuda monitor Isaac
  // filtered(movies) {
  //   const { bookmarkedOnly, selectedGenre, searchText } = this.state;
  //   return movies
  //     .filter((movie) => this.filtereBookmarked(movie, bookmarkedOnly))
  //     .filter(() => this.filteredGenre(movie, this.filteredGenre(movie, selectedGenre))
  //     .filter(() => ));
  // }

  filtereBookmarked(movie, bookmarkedOnly) {
    if (bookmarkedOnly && movie.bookmarked) return true;
    if (bookmarkedOnly) return false;
    return true;
  }
  // tem q trabalhar a lógica dessas duas proximas funcoes, por hora eu só copiei e colei da func ai de cima
  // filteredGenre(movie, selectedGenre) {
  //   if (selectedGenre && movie.genre) return true;
  //   if (selectedGenre) return false;
  //   return true;
  // }

  // filteredText(movie, searchText) {
  //   if (searchText && movie.Text) return true;
  //   if (searchText) return false;
  //   return true;
  // }

  // Requisito 18 - Ajuda Monitora Lêticia com as funções callbacks.
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />

        <MovieList movies={ this.filtered(movies) } />
        <AddMovie onClick={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
