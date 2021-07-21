import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarked: false,
      selectedGenre: '',
      movies: [],
    };
    this.titleInputCallBack = this.titleInputCallBack.bind(this);
    this.bookmarkCallBack = this.bookmarkCallBack.bind(this);
    this.selectGenreCallBack = this.selectGenreCallBack.bind(this);
    this.MovieCallBack = this.MovieCallBack.bind(this);
    this.myFilter = this.myFilter.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }

  componentDidMount() {
    const { movies } = this.props;
    const myMovies = this.state;
    console.log(movies);
    movies.forEach((movie) => {
      myMovies.movies.push(movie);
      // this.state.movies.push(movie);
    });
  }

  titleInputCallBack(event) {
    this.setState({ searchText: event.target.value });
  }

  bookmarkCallBack(event) {
    this.setState({ bookmarked: event.target.value });
  }

  selectGenreCallBack(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  MovieCallBack({ subtitle, title, imagePath, storyline, rating, genre }) {
    const { movies } = this.state;
    const newMovie = { subtitle, title, imagePath, storyline, rating, genre };
    console.log(movies, newMovie);
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  movieFilter({ subtitle, title, imagePath, storyline, rating, genre }) {
    const { searchText, selectedGenre } = this.state;
    const movie = { subtitle, title, imagePath, storyline, rating, genre };
    if (movie.title.toLowerCase().contains(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().contains(searchText.toLowerCase())
      || movie.genre === selectedGenre) {
      return movie;
    }
  }

  myFilter() {
    const { searchText, selectedGenre, movies } = this.state;
    if (!searchText || !selectedGenre || !movies) {
      return movies.filter(this.movieFilter);
    }
    return movies;
  }

  render() {
    const { searchText, selectedGenre, bookmarked } = this.state;
    const allMovies = this.myFilter();
    return (
      <div className="App">
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.titleInputCallBack }
          bookmarkedOnly={ bookmarked }
          onBookmarkedChange={ this.bookmarkCallBack }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectGenreCallBack }
        />
        <AddMovie
          onClick={ this.MovieCallBack }
        />
        <MovieList movies={ allMovies /*  this.myFilter()  */ } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieLibrary;
