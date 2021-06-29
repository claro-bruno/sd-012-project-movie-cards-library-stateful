import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

function defaultState(props) {
  return {
    searchText: '',
    bookmarkedOnly: false,
    selectedGenre: '',
    movies: props.movies,
  };
}

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleLibrary = this.handleLibrary.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = defaultState(props);
  }

  handleLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(movie) {
    const { state } = this;
    const movieList = [...state.movies, movie];
    this.setState({ movies: movieList });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleLibrary }
          onBookmarkedChange={ this.handleLibrary }
          onSelectedGenreChange={ this.handleLibrary }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
