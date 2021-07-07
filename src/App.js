import React, { Component } from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary />
      </div>
    );
  }
}

export default App;
