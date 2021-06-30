// implement MovieLibrary component here
import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange={ () => {} }
          bookmarkedOnly=""
          onBookmarkedChange={ () => {} }
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
        />
        <AddMovie
          onClick={ () => {} }
        />
      </div>
    );
  }
}

export default MovieLibrary;
