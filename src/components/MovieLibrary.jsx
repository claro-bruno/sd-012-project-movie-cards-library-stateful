import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import moviesData from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.markFilter = this.markFilter.bind(this);
    this.checkFilter = this.checkFilter.bind(this);
    this.textFilter = this.textFilter.bind(this);
    this.click = this.click.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSearchTextChange(e) {
    this.textFilter(e);
    return this.handleChange(e);
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      this.setState({
        bookmarkedOnly: true,
      });
      this.markFilter(true);
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
      this.markFilter(false);
    }
  }

  onSelectedGenreChange(e) {
    this.checkFilter(e);
    return this.handleChange(e);
  }

  markFilter(bo) {
    this.setState(({ movies }) => {
      if (bo === true) {
        const markeds = movies.filter((movie) => movie.bookmarked === bo);
        return {
          movies: markeds,
        };
      }
      return {
        movies: moviesData,
      };
    });
  }

  checkFilter(e) {
    const { value } = e.target;
    this.setState(({ movies }) => {
      const genres = movies.filter((movie) => movie.genre === value);
      return {
        movies: genres,
      };
    });
  }

  textFilter(e) {
    const { value } = e.target;
    this.setState(({ movies }) => {
      const texts = movies.filter((movie) => (
        movie.title.toLowerCase().includes(value.toLowerCase())
        || movie.subtitle.toLowerCase().includes(value.toLowerCase())
        || movie.storyline.toLowerCase().includes(value.toLowerCase())
      ));
      return {
        movies: texts,
      };
    });
  }

  click(movie) {
    this.setState(({ movies }) => ({ movies: [...movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly,
      selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.click }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
