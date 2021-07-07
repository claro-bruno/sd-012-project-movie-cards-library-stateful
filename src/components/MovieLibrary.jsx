import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.handleClick = this.handleClick.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkerdOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkerdOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleClick }
          bookmarkedOnly={ bookmarkerdOnly }
          onBookmarkedChange={ this.handleClick }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleClick }
        />
        <MovieList movies={ movies } />
        <AddMovie addNewMovie={ this.addNewMovie } />
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
