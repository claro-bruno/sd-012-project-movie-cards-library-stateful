// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.filterByBookmarker = this.filterByBookmarker.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.filterByText = this.filterByText.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...props.movies],
    };
  }

  filterByBookmarker(newMovies) {
    return newMovies.filter((movie) => movie.bookmarked);
  }

  filterByGenre(newMovies) {
    const { selectedGenre } = this.state;
    return newMovies.filter((movie) => movie.genre === selectedGenre);
  }

  filterByText(newMovies) {
    const { searchText } = this.state;
    return newMovies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
  }

  changeHandler(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let newMovies = [...movies];
    if (bookmarkedOnly) {
      newMovies = this.filterByBookmarker(newMovies);
    }
    if (selectedGenre) {
      newMovies = this.filterByGenre(newMovies);
    }
    if (searchText) {
      newMovies = this.filterByText(newMovies);
    }

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeHandler }
        />
        <AddMovie
          onClick={ () => {} }
        />
        <MovieList
          movies={ newMovies }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default MovieLibrary;
