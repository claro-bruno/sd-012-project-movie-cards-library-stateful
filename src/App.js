import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
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

export default App;
