import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange={ console.log }
          bookmarkedOnly={ false }
          onBookmarkedChange={ console.log }
          selectedGenre=""
          onSelectedGenreChange={ console.log }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ console.log } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [{}],
};

export default MovieLibrary;
