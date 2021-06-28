import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { props, state } = this;
    const { movies } = props;
    const movieFilter = movies
      .filter((movie) => movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value));
    this.setState({
      searchText: value,
    }, () => (state.searchText !== '' ? this.setState({
      movies: movieFilter,
    }) : this.setState({
      movies,
    })));
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { props } = this;
    const { movies } = props;
    const movieFilter = movies.filter((movie) => movie.bookmarked);
    this.setState({
      bookmarkedOnly: checked,
    }, () => (checked ? this.setState({
      movies: movieFilter,
    }) : this.setState({
      movies,
    })));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { props, state } = this;
    const { movies } = props;
    const movieFilter = movies.filter((movie) => movie.genre === value);
    this.setState({
      selectedGenre: value,
    }, () => (state.selectedGenre !== '' ? this.setState({
      movies: movieFilter,
    }) : this.setState({
      movies,
    })));
  }

  onClick(objeto) {
    console.log(objeto);
  }

  render() {
    const { state } = this;
    return (
      <div>
        <SearchBar
          searchText={ state.searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ state.bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ state.selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ state.movies } />
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
