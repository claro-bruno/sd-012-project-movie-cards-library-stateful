import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    }
  }
  render() {
    return(
      <form>
        <SearchBar />
      </form>
    )
  }
}

export default MovieLibrary;