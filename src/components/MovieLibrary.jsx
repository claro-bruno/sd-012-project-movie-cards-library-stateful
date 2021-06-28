import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }

  handleAddMovie(movieData) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieData],
    });
  }

  searchTextChange(evt) {
    this.setState({
      searchText: evt.target.value,
    });
  }

  bookmarkedChange(evt) {
    this.setState({
      bookmarkedOnly: evt.target.checked,
    });
  }

  selectedGenreChange(evt) {
    this.setState({
      selectedGenre: evt.target.value,
    });
  }

  movieFilter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies
      .filter(({ genre }) => genre.includes(selectedGenre))
      .filter(({ bookmarked }) => !bookmarkedOnly || bookmarked)
      .filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(searchText.toLowerCase())
      || subtitle.toLowerCase().includes(searchText.toLowerCase())
      || storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <>
        <SearchBar
          searchText={ searchText }
          searchTextChange={ this.searchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          bookmarkedChange={ this.bookmarkedChange }
          selectedGenre={ selectedGenre }
          selectedGenreChange={ this.selectedGenreChange }
        />

        <MovieList
          movies={ this.movieFilter() }
        />

        <AddMovie onClick={ this.handleAddMovie } />
      </>
    );
  }
}

export default MovieLibrary;
