import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.changeMovieList = this.changeMovieList.bind(this);

    this.state = {
      textInput: '',
      genreOption: '',
      favoritesOnly: '',
    };
  }

  render() {
    const { textInput, favoritesOnly, genreOption } = this.state;
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
