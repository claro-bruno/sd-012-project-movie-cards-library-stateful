import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  filterBySearchText = (searchText) => {
    const { movies } = this.props;
    return (movies.filter((movie) => {
      const title = movie.title.includes(searchText);
      const subtitle = movie.subtitle.includes(searchText);
      const storyline = movie.storyline.includes(searchText);
      return title || subtitle || storyline;
    }));
  }

  filterByBookmarked = (bookmarkedOnly) => {
    const { movies } = this.props;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    return movies;
  }

  onSearchTextChange = (e) => {
    this.setState({ searchText: e.target.value }, () => {
      const { searchText } = this.state;
      this.setState({ movies: this.filterBySearchText(searchText) });
    });
  }

  onBookmarkedChange = (e) => {
    this.setState({ bookmarkedOnly: e.target.checked }, () => {
      const { bookmarkedOnly } = this.state;
      this.setState({ movies: this.filterByBookmarked(bookmarkedOnly) });
    });
  }

  onSelectedGenreChange = (e) => {
    const { movies } = this.props;
    this.setState({ selectedGenre: e.target.value }, () => {
      const { selectedGenre } = this.state;
      this.setState({ movies: movies.filter((movie) => movie.genre === selectedGenre) });
    });
  }

  onAddMovie = (movie) => {
    const { movies } = this.props;
    const updatedMovies = [...movies, movie];
    this.setState({ movies: updatedMovies });
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
        <AddMovie onClick={ this.onAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
