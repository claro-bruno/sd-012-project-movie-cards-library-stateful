import React, { Component } from 'react';

// import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movies from '../data';



class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {};
  }

  handleInput(e) {
    this.setState = {
      inputValue: e.target.value,
    };
    console.log(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar parentThis={ this } />
        <MovieList movies={ movies } inputValue={ this.state.inputValue } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;