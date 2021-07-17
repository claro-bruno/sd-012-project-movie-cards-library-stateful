import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import MovieCard from './MovieCard';
import MovieList from './MovieList';

// const INITIAL_STATE = {
// };

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.searchTextChange = this.searchTextChange.bind(this);
    this.transferInput = this.transferInput.bind(this);
  }

  searchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  transferInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    let { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (searchText) {
      movies = movies.filter((movie) => movie
        .title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
    }
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.transferInput }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.transferInput }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf({}).isRequired,
};
export default MovieLibrary;
