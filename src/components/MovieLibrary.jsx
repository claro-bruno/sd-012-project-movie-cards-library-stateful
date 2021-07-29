import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import moviedata from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: moviedata,
    };

    this.getFilteredMovies = this.getFilteredMovies.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(data) {
    this.setState((prevState) => ({ movies: [...prevState.movies, data] }));
  }

  getFilteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredByBookmarked = movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movies));
    const filteredBySearchText = filteredByBookmarked
      .filter((movie) => movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText));
    const filteredByGenre = filteredBySearchText
      .filter((movie) => (selectedGenre === ''
        ? filteredBySearchText : movie.genre === selectedGenre));
    return filteredByGenre;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={
            ({ target }) => this.setState({ searchText: target.value })
          }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={
            ({ target }) => this.setState({
              bookmarkedOnly: target.type === 'checkbox'
                ? target.checked : target.value })
          }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={
            ({ target }) => this.setState({ selectedGenre: target.value })
          }
        />
        <AddMovie onClick={ this.getMovies } />
        <MovieList movies={ this.getFilteredMovies() } />
      </section>
    );
  }
}

export default MovieLibrary;
