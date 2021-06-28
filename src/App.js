import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList />
        <AddMovie onClick={ this.handleChange } />
      </div>
    );
  }
}

export default App;
