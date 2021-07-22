import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import movies from './data';

export default class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(param) {
    console.log(param);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}
