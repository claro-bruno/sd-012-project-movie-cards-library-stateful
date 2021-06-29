import React from 'react';
import PropTypes from 'prop-types';
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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  handleAddMovie(movieInfo) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieInfo],
    });
  }

  onSearchTextChange(evt) {
    this.setState({
      searchText: evt.target.value,
    });
  }

  onBookmarkedChange(evt) {
    this.setState({
      bookmarkedOnly: evt.target.checked,
    });
  }

  onSelectedGenreChange(evt) {
    this.setState({
      selectedGenre: evt.target.value,
    });
  }

  filterMovie() {
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
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />

        <MovieList
          movies={ this.filterMovie() }
        />

        <AddMovie onClick={ this.handleAddMovie } />
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
