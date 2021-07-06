import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText={ textInput }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ favoritesOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ genreOption }
          onSelectedGenreChange={ this.handleChange }
        />
        <div>
          <MovieList
            movies={ filterMovies }
            searchText={ textInput }
            bookmarkedOnly={ favoritesOnly }
            selectedGenre={ genreOption }
          />
        </div>
        <AddMovie
          onClick={ this.changeMovieList }
        />
      </div>

    );
  }
}

export default MovieLibrary;
