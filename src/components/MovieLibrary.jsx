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
  }

  filterFavorites = (isChecked) => {
    const { movies } = this.props;
    const filtered = movies
      .filter((movie) => (
        isChecked ? movie.bookmarked === isChecked : true
      ));
    this.setState({ movies: filtered });
  }

  filterGenre = (genre) => {
    const { movies } = this.props;
    const filtered = movies.filter((movie) => {
      const filteredMovies = genre === '' ? true : movie.genre === genre;
      return filteredMovies;
    });
    this.setState(() => ({ movies: filtered }));
  }

  filterByName = (search) => {
    const { movies } = this.props;
    const searchValue = search.toLowerCase();
    const filtered = movies
      .filter((movie) => movie.title.toLowerCase().includes(searchValue)
      || movie.subtitle.toLowerCase().includes(searchValue)
      || movie.storyline.toLowerCase().includes(searchValue));
    this.setState({ movies: filtered });
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
    return (id === 'selectedGenre' ? this.filterGenre(value) : this.filterByName(value));
  }

  handleCheckboxChange = ({ target }) => {
    const { checked } = target;
    if (checked) {
      this.setState({ bookmarkedOnly: true });
    } else {
      this.setState({ bookmarkedOnly: false });
    }
    this.filterFavorites(checked);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main className="main">
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleCheckboxChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ () => 'test' } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
