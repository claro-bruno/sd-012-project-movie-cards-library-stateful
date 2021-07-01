// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }
}

export default MovieLibrary;
