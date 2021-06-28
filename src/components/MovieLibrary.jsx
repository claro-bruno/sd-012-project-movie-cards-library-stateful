import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleSearchEvent = this.handleSearchEvent.bind(this);
    this.handleBookmarkedEvent = this.handleBookmarkedEvent.bind(this);
    this.handleGenreEvent = this.handleGenreEvent.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleSearchEvent(e) {
    const { value } = e.target;

    this.setState({ searchText: value });
  }

  handleBookmarkedEvent(e) {
    const { checked } = e.target;

    this.setState({ bookmarkedOnly: checked });
  }

  handleGenreEvent(e) {
    const { value } = e.target;

    this.setState({ selectedGenre: value });
  }

  handleAddMovie(movie) {
    const { movies } = this.state;
    const newMovies = [...movies, movie];
    this.setState({ movies: newMovies });
  }

  filterMovies() {
    const {
      movies,
      bookmarkedOnly,
      selectedGenre,
      searchText,
    } = this.state;
    const filteredMovies = movies.filter((movie) => {
      const { title, subtitle, storyline, bookmarked, genre } = movie;

      const searchBool = searchText !== ''
        ? (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText))
        : true;
      const bookmarkBool = bookmarkedOnly ? bookmarked : true;
      const genreBool = genre.includes(selectedGenre);

      return (searchBool && bookmarkBool && genreBool);
    });
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const {
      handleSearchEvent,
      handleBookmarkedEvent,
      handleGenreEvent,
      filterMovies,
      handleAddMovie,
    } = this;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ handleSearchEvent }
          onBookmarkedChange={ handleBookmarkedEvent }
          onSelectedGenreChange={ handleGenreEvent }
        />
        <MovieList movies={ filterMovies() } />
        <AddMovie onClick={ handleAddMovie } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
