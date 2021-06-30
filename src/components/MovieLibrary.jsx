// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor({ movies }) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
      filtredMovies: movies,
    };
  }

  onClick = (state) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  setFunction = () => {
    const { searchText, bookmarkedOnly,
      selectedGenre, movies,
      filtredMovies } = this.state;
    if (searchText !== '') {
      const newMovieList = movies
        .filter((movie) => movie.title
          .includes(searchText)
      || movie.subtitle
        .toLowerCase().includes(searchText)
      || movie.storyline.includes(searchText));
      this.setState({
        movies: newMovieList,
      });
    } else {
      const { movies: originalMovies } = this.props;
      this.setState({
        movies: originalMovies,
      });
    }
    if (selectedGenre) {
      this.setState({
        movies: movies.filter((movie) => movie.genre === selectedGenre),
      });
    }
    if (bookmarkedOnly === true) {
      this.setState({
        movies: filtredMovies.filter((movie) => movie.bookmarked),
      });
    }
  }

  onSearchTextChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.setFunction());
  }

  onBookmarkedChange = ({ target }) => {
    const { checked, name } = target;
    this.setState({
      [name]: checked,
    }, () => this.setFunction());
  }

  onSelectedGenreChange = ({ target }) => {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    }, () => this.setFunction());
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;
