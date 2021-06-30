import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [this.props.movies],
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onAddNewMovie = this.onAddNewMovie.bind(this);
  }

  onAddNewMovie(newMovie) {
    this.setState({
      movies: newMovie,
    });
    movies.push(newMovie);
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  onBookmarkedChange(e) {
    this.setState({
      bookmarkedOnly: e.target.checked,
    });
  }

  onSelectedGenreChange(e) {
    this.setState({
      selectedGenre: e.target.value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.props;
    if (searchText) {
      movies = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) movies = movies.filter((movie) => movie.bookmarked);
    if (selectedGenre) movies = movies.filter((movie) => movie.genre === selectedGenre);
    return (
      <form>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onAddNewMovie } />
      </form>
    );
  }
}

export default MovieLibrary;
