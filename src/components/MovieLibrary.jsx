// Nestes requisitos consultei o github do colega Caio Takeshi para entender melhor,
// https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/31/files

import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor({ movies }) {
    super();

    this.onClick = this.onClick.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
      filtered: movies,
    };
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  onSearchTextChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.updateState());
  }

  onBookmarkedChange({ target }) {
    const { checked, name } = target;
    this.setState({
      [name]: checked,
    }, () => this.updateState());
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    }, () => this.updateState());
  }

  updateState() {
    const { searchText, bookmarkedOnly, selectedGenre, movies, filtered } = this.state;
    if (searchText !== '') {
      const filteredArr = movies
        .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
      this.setState({
        movies: filteredArr,
      });
    } else {
      const { movies: realMovies } = this.props;
      this.setState({
        movies: realMovies,
      });
    }

    if (selectedGenre) {
      this.setState({
        movies: movies.filter((event) => event.genre === selectedGenre),
      });
    }

    if (bookmarkedOnly === true) {
      this.setState({
        movies: filtered.filter((event) => event.bookmarked),
      });
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
          onSelectedGenre={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
