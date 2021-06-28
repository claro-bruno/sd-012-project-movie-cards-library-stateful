import React, { Component } from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';
import { movies } from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

export default App;
