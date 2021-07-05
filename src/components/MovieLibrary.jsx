import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    })
  }

  onBookmarkedChange(e) {
    console.log(e.target);
  }

  onSelectedGenreChange(e) {
    console.log(e.target);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     storyline: PropTypes.string.isRequired,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default MovieLibrary;
