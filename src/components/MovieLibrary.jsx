import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      filtred: movies,
    };
  }

  // componentDidUpdate = () => {
  //   this.updateFunction();
  // }

  onClick = () => {
  }

  updateFunction = () => {
    const { searchText } = this.state;
    if (searchText !== '') {
      const newAr = movies.filter((elm) => elm.title.toUpperCase().includes(searchText.toUpperCase()));
      this.setState({
        filtred: newAr,
      });
    } else {
      this.setState({
        filtred: movies,
      });
    }
  }

  onSearchTextChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, () => this.updateFunction());
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, filtred } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={ searchText } onSearchTextChange={ this.onSearchTextChange } />
        <MovieList movies={ filtred } />
        <AddMovie movies={ movies } onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;
