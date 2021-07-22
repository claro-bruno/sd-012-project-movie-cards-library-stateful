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
    this.changeSearcher = this.changeSearcher.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
  }

  changeSearcher({ target }) {
    this.setState({ searchText: target.value }, this.moviesFilter);
  }

  bookmarkedChange({ target }) {
    const { movies } = this.state;
    this.setState({ bookmarkedOnly: target.checked }, () => {
      this.setState({ movies: movies.filter(({ bookmarked }) => bookmarked) });
    });
  }

  selectedGenreChange({ target }) {
    const { movies } = this.state;
    this.setState({ selectedGenre: target.value }, () => {
      const { selectedGenre } = this.state;
      this.setState({ movies: movies.filter((elem) => elem.genre === selectedGenre) });
    });
  }

  moviesFilter() {
    let isFiltered = '';
    const { searchText, movies } = this.state;
    if (searchText.length < 1) {
      const { movies: propMovies } = this.props;
      this.setState({ movies: propMovies });
      return;
    }
    isFiltered = movies.filter(({ title, subtitle, storyline }) => (
      `${title}${subtitle}${storyline}`.includes(searchText)
    ));
    this.setState({ movies: isFiltered });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2>Minha incrível Movie Library</h2>
        <SearchBar
          searchText={ searchText }
          changeSearcher={ this.changeSearcher }
          bookmarkedOnly={ bookmarkedOnly }
          bookmarkedChange={ this.bookmarkedChange }
          selectedGenre={ selectedGenre }
          selectedGenreChange={ this.selectedGenreChange }
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
