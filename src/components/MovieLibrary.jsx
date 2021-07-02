import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    const { movies } = this.props;

    const filterMovies = movies.filter((movie) => movie.storyline.search(value) > 1
      || movie.title.search(value) > 1
      || movie.subtitle.search(value) > 1);

    this.setState({
      searchText: value,
    });

    if (value !== '') {
      this.setState({ movies: filterMovies });
    } else {
      this.setState({ movies });
    }
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    const { movies } = this.props;

    if (checked) {
      const filterMovies = movies.filter((movie) => movie.bookmarked === true);
      this.setState({ movies: filterMovies });
    } else {
      this.setState({ movies });
    }

    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    const { movies } = this.props;

    const filterMovies = movies.filter((movie) => movie.genre === value);
    if (value === '') {
      this.setState({ movies });
    } else {
      this.setState({ movies: filterMovies });
    }

    this.setState({
      selectedGenre: value,
    });
  }

  onChangeHandler(event) {
    const { id, value, checked } = event.target;

    switch (id) {
    case 'favoritos':
      this.setState({ bookmarkedOnly: checked });
      break;
    case 'texto':
      this.setState({ searchText: value });
      break;
    case 'select':
      this.setState({ selectedGenre: value });
      break;
    default:
    }
  }

  onClick(newMovie) {
    this.setState((prevState) => ({ movies: [...prevState.movies, newMovie] }));
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
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
