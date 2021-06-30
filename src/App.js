import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}
