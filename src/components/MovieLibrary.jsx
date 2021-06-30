import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

function defaultState(props) {
  return {
    searchText: '',
    bookmarkedOnly: false,
    selectedGenre: '',
    movies: props.movies,
  };
}

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleLibrary = this.handleLibrary.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
    this.filterByBookmark = this.filterByBookmark.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.state = defaultState(props);
  }

  handleFilters() {
    this.filterByBookmark();
    this.filterBySearch();
    this.filterByGenre();
  }

  handleLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.handleFilters());
  }

  onClick(movie) {
    const { state } = this;
    const movieList = [...state.movies, movie];
    this.setState({ movies: movieList });
  }

  filterBySearch() {
    const { searchText, movies } = this.state;

    if (searchText !== '') {
      this.setState({
        movies: movies.filter(({ title, subtitle, storyline }) => (
          title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)
        )),
      });
    }
  }

  filterByBookmark() {
    const { bookmarkedOnly, movies } = this.state;

    if (bookmarkedOnly) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarked === true),
      });
    }
  }

  filterByGenre() {
    const { selectedGenre, movies } = this.state;

    if (selectedGenre !== '') {
      this.setState({
        movies: movies.filter((movie) => movie.genre.includes(selectedGenre)),
      });
    }
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleLibrary }
          onBookmarkedChange={ this.handleLibrary }
          onSelectedGenreChange={ this.handleLibrary }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
