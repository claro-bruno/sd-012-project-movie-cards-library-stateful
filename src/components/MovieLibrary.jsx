import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
  }

  handleAddMovie(movieData) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieData],
    });
  }

  searchTextChange(evt) {
    this.setState({
      searchText: evt.target.value,
    });
  }

  bookmarkedChange(evt) {
    this.setState({
      bookmarkedOnly: evt.target.checked,
    });
  }
}
