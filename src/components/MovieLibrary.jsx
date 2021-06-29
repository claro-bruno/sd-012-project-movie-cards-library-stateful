// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.filteOfMovies = this.filteOfMovies.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filteOfMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movieList = movies;
    if (searchText !== '') {
      movieList = movieList.filter((findMovie) => findMovie.title.includes(searchText)
      || findMovie.subtitle.includes(searchText)
      || findMovie.storyline.includes(searchText));
    }
    movieList = bookmarkedOnly ? movieList
      .filter((movieFind) => movieFind.bookmarked) : movieList;
    movieList = selectedGenre === '' ? movieList : movieList
      .filter((movieFind) => movieFind.genre === selectedGenre);
    return movieList;
  }

  render() {
    const { handleChange, state, filteOfMovies } = this;
    const movies = filteOfMovies();
    const { searchText, bookmarkedOnly, selectedGenre } = state;
    return (
      <div>
        <MovieList movies={ movies } />
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ handleChange }
          onSelectedGenreChange={ handleChange }
          onBookmarkedChange={ handleChange }
        />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
