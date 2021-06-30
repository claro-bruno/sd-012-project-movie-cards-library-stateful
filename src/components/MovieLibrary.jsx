import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.stateDefault = this.stateDefault.bind(this);

    this.state = this.stateDefault();
  }

  handleAddMovie(stateAddMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, stateAddMovie],
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  stateDefault() {
    const { movies } = this.props;
    return {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { handleChange, handleAddMovie } = this;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ handleChange }
          onBookmarkedChange={ handleChange }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ handleAddMovie } />
      </section>

    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
