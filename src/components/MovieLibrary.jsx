import React from 'react';
import SearchBar from './SearchBar';

const state = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies: '',
};

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = state;
    this.handleLibrary = this.handleLibrary.bind(this);
  }

  handleLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSearchTextChange={ this.handleLibrary }
        onBookmarkedChange={ this.handleLibrary }
        onSelectedGenreChange={ this.handleLibrary }
      />
    );
  }
}

export default MovieLibrary;
