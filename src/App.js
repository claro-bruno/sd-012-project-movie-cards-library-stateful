import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import moviesData from './data';
import MovieLibrary from './components/MovieLibrary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}
