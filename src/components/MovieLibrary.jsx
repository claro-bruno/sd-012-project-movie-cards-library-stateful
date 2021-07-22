import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }
  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, this.movieFilter);
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.state;
    this.setState({ bookmarkedOnly: target.checked }, () => {
      this.setState({ movies: movies.filter(({ bookmarked }) => bookmarked) });
    });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.state;
    this.setState({ selectedGenre: target.value }, () => {
      const { selectedGenre } = this.state;
      this.setState({ movies: movies.filter((elem) => elem.genre === selectedGenre) });
    });
  }

  movieFilter() {
    let filteredMovies = '';
    const { searchText, movies } = this.state;
    if (searchText.length < 1) {
      const { movies: propMovies } = this.props;
      this.setState({ movies: propMovies });
      return;
    }
    filteredMovies = movies.filter(({ title, subtitle, storyline }) => (
      `${title}${subtitle}${storyline}`.includes(searchText)
    ));
    this.setState({ movies: filteredMovies });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2>Minha incrível Movie Library</h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
