import React from 'react';
import Header from './components/Header';
import './App.css';
import data from './data';
import MovieLibrary from './components/MovieLibrary';

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
        <MovieLibrary movies={ data } />
      </div>
    );
  }
}

export default App;
