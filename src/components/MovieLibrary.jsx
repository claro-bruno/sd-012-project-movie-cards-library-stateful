import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filteredMovies() {
    const { searchText, movies, bookmarkedOnly, selectedGenre } = this.state;
    const arrayMovies = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked === true : movie))
      .filter((movie) => (movie.genre.includes(selectedGenre)))
      .filter((movie) => (movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText)));
    return arrayMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>
          My awesome movie library
        </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
