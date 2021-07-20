import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.searchOnChange = this.searchOnChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(target) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  searchOnChange() {
    const { searchText, bookMarkedOnly, selectedGenre, movies } = this.state;
    const arrMovie = movies
      .filter((movie) => (bookMarkedOnly ? movie.bookmarked === true : movie))
      .filter((movie) => (movie.genre === selectedGenre))
      .filter((movie) => (movie.title.toLowerCase().includes(searchText)
      || movie.subtitle.toLowerCase().includes(searchText)
      || movie.storyline.toLowerCase().includes(searchText)));
    return arrMovie;
  }

  render() {
    const { searchText, bookMarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookMarkedOnly={ bookMarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.searchOnChange() } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
