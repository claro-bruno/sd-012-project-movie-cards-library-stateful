import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }), this.filterMovies);
  }

  handleClick = (movieToAdd) => {
    let { movies } = this.state;
    movies = [...movies, movieToAdd];
    this.setState({ movies });
  }

  filterGenre = (movies, selectedGenre) => {
    const genreMovies = movies.filter((movie) => movie.genre === selectedGenre);
    return genreMovies;
  }

  filterMarks = (movies, bookmarkedOnly) => {
    const markedMovies = movies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    return markedMovies;
  }

  filterByText = (movies, searchText) => {
    const filteredMovies = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    return filteredMovies;
  }

  filterMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    let filteredMovies = [...movies];

    if (selectedGenre) filteredMovies = this.filterGenre(filteredMovies, selectedGenre);
    if (bookmarkedOnly) filteredMovies = this.filterMarks(filteredMovies, bookmarkedOnly);
    if (searchText) filteredMovies = this.filterByText(filteredMovies, searchText);

    this.setState({ movies: filteredMovies });
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};

export default MovieLibrary;
