import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
  }

  handleChangeState = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filter = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filterMovies = movies;

    if (searchText) {
      filterMovies = movies
        .filter(({ title, subtitle, storyline }) => `${title} ${subtitle} ${storyline}`
          .toLocaleLowerCase(({ title, subtitle, storyline })).includes(searchText));
    }

    if (bookmarkedOnly) {
      filterMovies = movies.filter(({ bookmarked }) => bookmarked);
    }

    if (selectedGenre) {
      filterMovies = movies.filter(({ genre }) => genre === selectedGenre);
    }
    return filterMovies;
  }

  addNewMovie = (e) => {
    this.setState((data) => ({
      movies: [...data.movies, e],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <section className="searchBar">
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.handleChangeState }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.handleChangeState }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.handleChangeState }
          />
          <AddMovie onClick={ this.addNewMovie } />
        </section>
        <MovieList movies={ this.filter() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
