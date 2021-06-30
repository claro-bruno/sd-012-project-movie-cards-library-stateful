import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movie: movies,
    };
  }

  render() {
    const { movie } = this.state;
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movie } />
      </div>
    );
  }
}

export default App;
