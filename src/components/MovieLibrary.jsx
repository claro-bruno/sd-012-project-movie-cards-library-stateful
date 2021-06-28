import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

const initialState = (movies) => {
  const obj = {
    searchText: '',
    bookmarkedOnly: false,
    selectedGenre: '',
    movies,
  };
  return obj;
};

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = initialState(movies);
  }

  handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const result = (type === 'checkbox' ? checked : value);
    this.setState({ [name]: result });
  }

  filterMoviesBy = () => {
    const { searchText, selectedGenre, movies, bookmarkedOnly } = this.state;
    if (selectedGenre) {
      return movies.filter((item) => item.genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    return movies.filter(({ title, subtitle, storyline }) => (
      (title.includes(searchText))
      || (subtitle.includes(searchText))
      || (storyline.includes(searchText))
    ));
  }

  addMovie = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMoviesBy() } />
        <AddMovie onClick={ this.addMovie } />
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
