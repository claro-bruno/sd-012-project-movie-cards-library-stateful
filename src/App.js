import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

export default class App extends Component {
  // constructor() {
  //   super();

  // }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}
