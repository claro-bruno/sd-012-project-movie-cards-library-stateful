import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import Data from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { type, value, checked } = target;
    if (type === 'text') {
      this.setState({
        searchText: value,
      });
    } else if (type === 'checkbox') {
      this.setState({
        bookmarkedOnly: checked,
      });
    } else {
      this.setState({
        selectedGenre: value,
      });
    }
  }
  // se o tipo do valor for igual a checkbox, ele vai pegar o target.checked (que existe no checkbox), senão, ele pega o value

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ Data } />
        <AddMovie />
      </div>

    );
  }
}

export default MovieLibrary;
