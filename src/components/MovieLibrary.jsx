// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import moviesData from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.movieAdd = this.movieAdd.bind(this);
    this.changeText = this.changeText.bind(this);
    this.bookmarkedToggle = this.bookmarkedToggle.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.changeParentThis = this.changeState.bind(this);
    this.filters = this.handleFilters.bind(this);
  }

  handleFilters(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const text = searchText.toLowerCase();
    return movies
      .filter(({ genre }) => genre.includes(selectedGenre))
      .filter(({ bookmarked }) => !bookmarkedOnly || bookmarked)
      .filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(text)
        || subtitle.toLowerCase().includes(text)
        || storyline.toLowerCase().includes(text)
      ));
  }

  changeText(e) {
    const { movies } = this.props;
    const { value } = e.target;
    if (value !== '') {
      this.setState({
        searchText: e.target.value,
      });
    } else {
      this.setState({
        searchText: '',
        movies,
      });
    }
  }

  bookmarkedToggle(e) {
    const { movies } = this.props;
    const { checked } = e.target;
    if (checked) {
      this.setState({
        bookmarkedOnly: checked,
      });
    } else {
      this.setState({
        bookmarkedOnly: checked,
        movies,
      });
    }
  }

  changeGenre(e) {
    const { movies } = this.props;
    const { value } = e.target;
    if (value !== '') {
      this.setState({
        selectedGenre: value,
      });
    } else {
      this.setState({
        selectedGenre: '',
        movies,
      });
    }
  }

  async changeState(movie, props) {
    props.setState((previous) => {
      const newMovies = [...previous.movies];
      newMovies.push(movie);
      return { movies: newMovies };
    });
  }

  movieAdd(movie) {
    const { parentThis } = this.props;
    this.changeState(movie, this);
    this.changeState(movie, parentThis);
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedToggle }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeGenre }
        />
        <MovieList movies={ this.handleFilters(movies) } />
        <AddMovie onClick={ this.movieAdd } />
      </>
    );
  }
}

MovieLibrary.defaultProps = {
  parentThis: undefined,
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  parentThis: PropTypes.arrayOf(PropTypes.object),
};
