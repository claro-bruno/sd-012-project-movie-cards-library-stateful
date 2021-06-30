import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="App">
          <Header />
          <MovieList movies={ movies } />
        </div>
      </div>
    );
  }
}

export default App;
