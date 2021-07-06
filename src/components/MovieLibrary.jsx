import React from 'react';
import SearchBar from './SearchBar';

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
      </div>
    );
  }
}
export default MovieLibrary;
