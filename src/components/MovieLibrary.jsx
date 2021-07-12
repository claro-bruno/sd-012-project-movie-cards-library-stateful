import React from 'react';
import SearchBar from './SearchBar';
/* import MovieList from './MovieList';
import AddMovie from './AddMovie'; */

class MovieLibrary extends React.Component {
  /* constructor(props) {
    super(props);
      this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: this.props.movies,
    }
  } */
  render() {
    /* const { movies } = this.state; */
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        {/* <MovieList movies={ movies } />
        <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
