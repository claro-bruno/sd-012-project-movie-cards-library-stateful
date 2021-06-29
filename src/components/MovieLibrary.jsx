// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = ({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    });
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onClick() {

  }

  onSearchTextChange() {

  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(bookmarkedOnly, searchText, selectedGenre, movies);
    return (
      <div>
        <AddMovie onClick={ this.onClick } />
        <SearchBar onChange={ this.onSearchTextChange } />
        <MovieList movies={ movies } />
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
