import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
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
        <div>
          <MovieList
            movies={ movies }
            searchText={ textInput }
            bookmarkedOnly={ favoritesOnly }
            selectedGenre={ genreOption }
          />
        </div>
      </div>
    );
  }
}

export default MovieLibrary;
