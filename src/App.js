import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import movies from './data';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </main>
    );
  }
}

export default App;
