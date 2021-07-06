import React, { Component } from 'react';
import { objectOf, arrayOf } from 'prop-types';

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

  searchTextChange = ({ target }) => {
    const { value } = target;

    this.setState({
      searchText: value,
    }, () => {
      this.setState({
        movies: this.movieFilter('text'),
      });
    });
  }

  bookmarkedChange = ({ target }) => {
    const value = target.checked;

    this.setState({
      bookmarkedOnly: value,
    }, () => {
      this.setState({
        movies: this.movieFilter('boolean'),
      });
    });
  }

  selectedGenreChange = ({ target }) => {
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
          onSearchTextChange={ this.searchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreChange }
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

MovieLibrary.propTypes = {
  movies: arrayOf(objectOf),
};
MovieLibrary.defaultProps = {
  movies: ['object'],
};

export default MovieLibrary;
