import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = (type === 'checkbox' ? target.checked : target.value);
    this.setState({ [name]: value });
  }
  // se o tipo do valor for igual a checkbox, ele vai pegar o target.checked (que existe no checkbox), senão, ele pega o value

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
        />
        <AddMovie />
      </div>

    );
  }
}

export default MovieLibrary;
