import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
  }

  onSearchTextChange = (e) => {
    this.setState({
      searchText: e.target.value,
    }, () => {
      this.setState({
        movies: this.filterMoviesBy(),
      });
    });
  }

  onBookmarkedChange = (e) => {
    this.setState({ bookmarkedOnly: e.target.checked }, () => {
      this.setState({
        movies: this.filterMoviesBy('bookmarked'),
      });
    });
  }

  onSelectedGenreChange = (e) => {
    const { value } = e.target;
    this.setState({
      selectedGenre: value,
    }, () => {
      this.setState({
        movies: this.filterMoviesBy('genre'),
      });
    });
  }

  filterMoviesBy = (typeFilter) => {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    if (typeFilter === 'genre') {
      return movies.filter((item) => item.genre === selectedGenre);
    }
    if (typeFilter === 'bookmarked') {
      return movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    return movies.filter(({ title, subtitle, storyline }) => (
      (title.includes(searchText))
      || (subtitle.includes(searchText))
      || (storyline.includes(searchText))
    ));
  }

  addMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
