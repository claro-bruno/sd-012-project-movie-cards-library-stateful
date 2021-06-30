import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import moviesList from './data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesList,
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
