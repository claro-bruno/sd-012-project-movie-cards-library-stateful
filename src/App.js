import React from 'react';
import Header from './components/Header';
import './App.css';
import data from './data';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList movies={ data } />
      </div>
    );
  }
}

export default App;
