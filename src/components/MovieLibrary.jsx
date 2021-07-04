// implement MovieLibrary component here
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

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBookmarkedChange = this.handleBookmarkedChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleTextChange({ target }) {
    const { value } = target;

    this.setState({ searchText: value });
  }

  handleBookmarkedChange({ target }) {
    const { checked } = target;

    this.setState({ bookmarkedOnly: checked });
  }

  handleSelectedGenreChange({ target }) {
    const { value } = target;

    this.setState({ selectedGenre: value });
  }

  handleAddMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
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
      let searchBool = false;
      if (searchText !== '') {
        searchBool = (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText));
      } else {
        searchBool = true;
      }
      let bookmarkBool = false;
      if (bookmarkedOnly) {
        bookmarkBool = bookmarked;
      } else {
        bookmarkBool = true;
      }
      const genreBool = genre.includes(selectedGenre);

      return (searchBool && bookmarkBool && genreBool);
    });
    return filteredMovies;
  }

  render() {
    const { handleTextChange,
      handleBookmarkedChange,
      handleSelectedGenreChange,
      filterMovies,
      handleAddMovie,
    } = this;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleSelectedGenreChange }
        />
        <MovieList movies={ filterMovies() } />
        <AddMovie onClick={ handleAddMovie } />
      </div>
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
