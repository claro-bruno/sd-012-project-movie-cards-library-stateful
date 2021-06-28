import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import movies from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie /* onClick={  }  *//>
      </div>
    );
  }
}

export default App;
