import React, { Component } from 'react';

import PropType from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    // const filteredMovies = movies;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.sendButtonClick = this.sendButtonClick.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    });
    // this.filterMovies();
    this.render();
  }

  onBookmarkedChange(e) {
    this.setState({
      bookmarkedOnly: e.target.value,
    });
    this.render();
  }

  onSelectedGenreChange(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
    this.render();
  }

  // filterMovies() {
  //   const { movies } = this.props;
  //   const { filteredMovies } = this.state;
  //   this.setState({
  //     filteredMovies: movies.filter((movie) => {
  //       const { searchText } = this.state;
  //       return (
  //         searchText === ''
  //         || movie.title === searchText
  //         || movie.subtitle === searchText
  //         || movie.storyline === searchText
  //       );
  //     }),
  //   });
  //   return (filteredMovies);
  // }

  sendButtonClick(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
    this.render();
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <AddMovie
          onClick={ this.sendButtonClick }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieLibrary;
