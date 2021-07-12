// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types'

class MovieLibrary extends React.Component{
  constructor({ movies }) {
    super();

    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '' ,
      movies: movies
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  fetchMovies() {
    const { searchText, bookMarkedOnly, selectedGenre } = this.state;
    let movies = this.state.movies;
    if(searchText.length > 0) movies = movies.
    filter((movie) => movie.title.includes(searchText) || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText) );
    if(bookMarkedOnly) movies = movies.filter((movie) => movie.bookmarked);
    if(selectedGenre.length > 0) movies = movies.filter((movie) => movie.genre === selectedGenre);

    return movies;
  }

  render() {  
    const moviesFiltred = this.fetchMovies();
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          bookMarkedOnly={this.state.bookMarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={ moviesFiltred } />


      </div>
    )
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;