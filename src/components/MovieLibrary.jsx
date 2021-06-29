import React, { Component } from 'react';

// import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';



class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: props.movies,
    };
  }

  searchTexChangetHandler(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          parentThis={ this } 

          searchText={ this.state.searchText }
          onSearchTextChange={ this.searchTexChangetHandler }
          bookmarkedOnly={ this.state.bookmarkedOnly }
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