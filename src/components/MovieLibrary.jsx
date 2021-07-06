import React, { Component } from 'react';
// import { objectOf, arrayOf } from 'prop-types';

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
  }

  onSearchTextChange = ({ target }) => {
    const { value } = target;

    this.setState({
      searchText: value,
    }, () => {
      this.setState({
        movies: this.movieFilter('text'),
      });
    });
  }

  onBookmarkedChange = ({ target }) => {
    const value = target.checked;

    this.setState({
      bookmarkedOnly: value,
    }, () => {
      this.setState({
        movies: this.movieFilter('boolean'),
      });
    });
  }

  onSelectedGenreChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      selectedGenre: value,
    }, () => {
      this.setState({
        movies: this.movieFilter('checkbox'),
      });
    });
  }

  theNewMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] }, async () => {
    });
  }

  movieFilter = (filter) => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    if (filter === 'boolean') {
      return movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (filter === 'checkbox') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (filter === 'text') {
      return movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
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
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.theNewMovie }
        />
      </div>
    );
  }
}

/* MovieLibrary.propTypes = {
  movies: arrayOf(objectOf),
};
MovieLibrary.defaultProps = {
  movies: ['object'],
}; */

export default MovieLibrary;
