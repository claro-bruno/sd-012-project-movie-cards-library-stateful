import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

class App extends Component {
  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
