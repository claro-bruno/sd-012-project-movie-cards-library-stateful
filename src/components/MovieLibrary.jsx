// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import data from '../data';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = () => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={ data } />
        <AddMovie onClick={ this.submitForm } />
      </div>
    );
  }
}

export default MovieLibrary;
