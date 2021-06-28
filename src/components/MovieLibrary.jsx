import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

function initialState(props) {
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
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filtering = this.filtering.bind(this);

    this.state = initialState(props);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox' ? target.checked : target.value);
    this.setState({ [name]: value });
  }

  onClick(movie) {
    const { state } = this;
    const movieList = [...state.movies, movie];
    this.setState({ movies: movieList });
  }

  filtering() {
    const { state } = this;
    const { bookmarkedOnly, selectedGenre, searchText, movies } = state;
    let moviesList = movies;

    if (bookmarkedOnly) {
      moviesList = movies.filter(({ bookmarked }) => bookmarked === true);
    }
    if (selectedGenre) {
      moviesList = movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (searchText) {
      moviesList = movies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)

        // Adicionando mais condicionais para a UX.

        || title.toLowerCase().includes(searchText.toLowerCase())
        || subtitle.toLowerCase().includes(searchText.toLowerCase())
        || storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }
    return moviesList;
  }

  render() {
    const { state } = this;
    return (
      <>
        <SearchBar
          searchText={ state.searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ state.bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ state.selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ this.filtering() }
        />
        <AddMovie
          onClick={ this.onClick }
        />
      </>
    );
  }
}

export default MovieLibrary;
