import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {

  render() {
    const { movies } = this.props;

    return (
      <div>
        <SearchBar 
        // searchText={ searchText }
        // onSearchTextChange={ () => {} }
        // bookmarkedOnly={ false }
        // onBookmarkedChange={ () => {} }
        // selectedGenre={ selectedGenre }
        // onSelectedGenreChange={ () => {} }
        />
        <MovieList movies={ movies } />
        {/* <AddMovie /> */}
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
