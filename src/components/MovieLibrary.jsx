import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.getState = this.getState.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    const { movies } = this.props;
    const moviesList = movies;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: moviesList,
      movies2: moviesList,
    };
  }

  onSelectedGenreChange(e) {
    this.setState({
      selectedGenre: e.target.value,
    }, () => this.filterMovie());
  }

  onBookmarkedChange(e) {
    this.setState({
      bookmarkedOnly: e.target.checked,
    }, () => this.filterMovie());
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    }, () => this.filterMovie());
  }

  getState(param) {
    console.log(param);
    const { movies } = this.props;
    this.setState({
      movies: [...movies, param],
      movies2: [...movies, param],
    });
  }

  filterMovie() {
    const {
      bookmarkedOnly,
      selectedGenre,
      searchText,
      movies2,
    } = this.state;
    // auxiliado pelo Ygor Saturnino, no requisito 18 e 19;
    if (searchText.length === 0) {
      this.setState({ movies: movies2 });
    } else {
      const moviesFilter = movies2.filter((item) => item.title.toLowerCase()
        .includes(searchText
          .toLowerCase())
        || item.subtitle.toLowerCase()
          .includes(searchText
            .toLowerCase())
          || item.storyline.toLowerCase()
            .includes(searchText
              .toLowerCase()));
      this.setState({ movies: moviesFilter });
    }
    if (selectedGenre !== '') {
      this.setState({
        movies: movies2.filter((item) => item.genre === selectedGenre) });
    }

    if (bookmarkedOnly === true) {
      this.setState({
        movies: movies2.filter((item) => item.bookmarked === true) });
    }
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
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
          onClick={ this.getState }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default MovieLibrary;
