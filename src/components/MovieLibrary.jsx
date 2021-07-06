import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.searchTextChange = this.searchTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleBookmarkedChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onClick(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  selectedGenreChange({ target: { value } }) {
    this.setState({
      selectedGenre: value,
    });
  }

  searchTextChange({ target: { value } }) {
    this.setState({
      searchText: value,
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredArray = movies.map((movie) => {
      const { title, bookmarked, genre } = movie;
      if (title.includes(searchText) && genre.includes(selectedGenre)) {
        return movie;
      } if (bookmarkedOnly && title.includes(searchText)
      && genre.includes(selectedGenre) && bookmarked) {
        return movie;
      }
      return undefined;
    });
    return filteredArray.filter((object) => object !== undefined);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookMarkedChange={ this.handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
