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
          bookmarkedOnly="true"
          selectedGenre=""
          onSelectedGenreChange={ () => {} }
        />
        <AddMovie onClick={ () => {} } />
      </div>
    );
  }
}

export default MovieLibrary;
