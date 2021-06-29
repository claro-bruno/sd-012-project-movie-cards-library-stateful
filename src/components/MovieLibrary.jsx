import React, { Component } from 'react';

// import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movies from '../data';



class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          parentThis={ this } 

          searchText={ 'avatar' }
          onSearchTextChange={ () => this }
          bookmarkedOnly={ false }
          onBookmarkedChange={ false }
          selectedGenre={ 'action' }
          onSelectedGenreChange={ false }
        />
        <MovieList movies={ movies } inputValue={ this.state.inputValue } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;